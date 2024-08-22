// src/app/api/freelancer/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
    usersTable,
    freelancersTable,
    freelancerEducationTable,
    freelancerWorkHistoryTable,
    freelancerCertificationTable,
} from "@/utils/database/drizzle-schemas";
import { db } from "@/utils/database/neon";
import { eq } from "drizzle-orm";
import { CertificationForm, EducationForm, EmploymentForm } from "@/utils/types/freelancer-profile";

export async function POST(req: NextRequest) {
    try {
        const {
            u_id,
            title,
            description,
            workHistory,
            educations,
            certifications,
            socialLinks,
            portfolio,
            skillTags
        } = await req.json();

        const user = await db.select().from(usersTable).where(eq(usersTable.u_id, u_id));
        if (!user[0]) {
            return new Response("User with this ID does not exist", { status: 404 });
        }

        const freelancerData = {
            u_id,
            title,
            image: "",
            description,
        };

        const [insertedFreelancer] = await db.insert(freelancersTable).values(freelancerData).returning();
        const freelancerId = insertedFreelancer.f_id;

        if (workHistory.length > 0) {
            await db.insert(freelancerWorkHistoryTable).values(
                workHistory.map((wh: EmploymentForm) => ({
                    freelancer_id: freelancerId,
                    company: wh.companyName,
                    job_title: wh.title,
                    job_desc: wh.description,
                    work_location: `${wh.city}-${wh.country}`,
                }))
            );
        }

        if (educations.length > 0) {
            await db.insert(freelancerEducationTable).values(
                educations.map((education: EducationForm) => ({
                    freelancer_id: freelancerId,
                    school: education.schoolName,
                    from_: education.from,
                    to_: education.to,
                    education_description: education.description || '',
                    degree: education.degree,
                }))
            );
        }

        if (certifications.length > 0) {
            await db.insert(freelancerCertificationTable).values(
                certifications.map((certification: CertificationForm) => ({
                    freelancer_id: freelancerId,
                    title: certification.certificateName,
                    organization: certification.organization,
                    date_of_completion: certification.date,
                    credentials_id: certification.credentialID || '',
                }))
            );
        }

        return NextResponse.json({ status: "success", data: insertedFreelancer });
    } catch (error) {
        console.error("Error processing request:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
