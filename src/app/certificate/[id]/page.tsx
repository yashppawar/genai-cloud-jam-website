import React from 'react';
import Image from 'next/image';
import { Roboto } from "next/font/google";
import { cn } from '@/lib/utils';
import { getCertificateDetails } from '@/lib/certificate-actions';
import type { Metadata } from 'next'

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

interface CertificatePageProps {
  params: { id: string };
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const generateMetadata =  async ({ params }: CertificatePageProps): Promise<Metadata> => {
  // read route params
  const { id } = params;
  const certificate = await getCertificateDetails(id);
 
  if (!certificate) {
    return {
      title: "Invalid CertificateID",
      description: "Couldnt resolve the certificate ID"
    }
  }
 
  return {
    title: `${certificate.eventName} Certificate`,
    description: `Certifidcate of Completion Awarded to ${certificate.name}`,
    openGraph: {
      images: [`/certificates/${certificate.id}.png`],
    },
  }
}

export default async function CertificatePage({ params }: CertificatePageProps) {
  const { id } = params;
  const certificate = await getCertificateDetails(id);

  if (!certificate) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-base-100 p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> Certificate not found.</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen flex justify-center items-center bg-base-100 p-4", roboto.className)}>
      <div className="bg-base-300 p-6 sm:p-8 rounded-lg shadow-md max-w-3xl w-full mx-auto">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2 font-mono">Certificate of Completion</h2>
          <p className="text-base-content">This certificate is awarded to</p>
          <h3 className="text-xl sm:text-2xl font-semibold text-primary-foreground">{certificate.name}</h3>
        </div>

        <div className="relative w-full aspect-[4/3]  mb-4 sm:mb-6">
          <Image
            src={`/certificates/${id}.png`}
            alt={`${certificate.name} Certificate`}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>

        <div className="mb-4">
          <p className="text-base-content">For successfully completing the {certificate.eventName}.</p>
          <p className="text-sm text-secondary">Issued on: {certificate.issueDate}</p>
        </div>

        <div className="mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm font-semibold text-secondary">Organized by</p>
              <div className="w-24 sm:w-auto">
                <Image src="/gdgviitfull.png" alt={certificate.organizer} width={200} height={80} objectFit="contain" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary">Certificate ID: {certificate.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
