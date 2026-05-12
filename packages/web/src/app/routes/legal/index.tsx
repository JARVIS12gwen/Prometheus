import React from 'react';
import { ShieldCheck, Scale, Lock, Info, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectDashboardLayout } from '../../components/project-layout';
import { PageTitle } from '../../components/page-title';

export const LegalPage = () => {
  return (
    <ProjectDashboardLayout>
      <PageTitle title="Legal Information">
        <div className="container mx-auto py-8 max-w-4xl px-4">
          <div className="flex flex-col gap-8">
            <header className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Legal Center</h1>
                <p className="text-muted-foreground">Prometheus Transparency & User Protection</p>
              </div>
            </header>

            {/* Terms of Service Section */}
            <Card className="border-none bg-accent/30 backdrop-blur-sm shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4">
                <Scale className="w-6 h-6 text-primary" />
                <CardTitle>Terms of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm leading-relaxed text-foreground/80">
                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Governing Law</h3>
                  <p>Prometheus is operated personally and is governed strictly by the laws of India. By using this platform, you agree to submit to the jurisdiction of Indian courts.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. Prohibited Activities</h3>
                  <p>We maintain a zero-tolerance policy for abuse. You are strictly prohibited from using Prometheus for:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Spamming or mass unsolicited communications.</li>
                    <li>Any illegal or fraudulent activities.</li>
                    <li>Cryptocurrency mining or unauthorized resource consumption.</li>
                    <li>Illegal data scraping or violating third-party Terms of Service.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. Account Termination</h3>
                  <p>We reserve the complete right to monitor platform usage and ban any user detected violating these terms or engaging in suspicious activity without prior notice or explanation.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Payments & Refunds</h3>
                  <p>Prometheus offers a free trial to ensure the tool meets your needs. Consequently, all purchases are final. We do not offer refunds or cancellations once a subscription is active.</p>
                </section>

                <section className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <h3 className="text-lg font-semibold text-destructive mb-2">5. Limitation of Liability</h3>
                  <p className="italic">
                    Prometheus is provided "as is." We are not responsible for any failures, financial losses, academic failures, lead losses, or bans on third-party platforms (like Facebook or LinkedIn). You assume full responsibility for your automations and their consequences.
                  </p>
                </section>
              </CardContent>
            </Card>

            {/* Privacy Policy Section */}
            <Card className="border-none bg-accent/30 backdrop-blur-sm shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4">
                <Lock className="w-6 h-6 text-primary" />
                <CardTitle>Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm leading-relaxed text-foreground/80">
                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Information We Collect</h3>
                  <p>We collect only the data necessary to provide and improve the Prometheus experience:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Basic Identity: Real name, email, and username.</li>
                    <li>Demographics: Age, birthdate, and country of origin.</li>
                    <li>Operational Data: The definitions and structures of your created workflows.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. What We DO NOT Store</h3>
                  <p>To ensure your security, we explicitly state that we do not store:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Confidential Content: The actual data inside your spreadsheets or lead lists.</li>
                    <li>Direct Access: We do not store mobile numbers or sensitive PII of third parties you process.</li>
                    <li>API Integrity: Your API keys are used securely and never stored in a readable format for any purpose other than executing your workflows.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. Data Sharing</h3>
                  <p>Your privacy is non-negotiable. We will never sell your personal data to any third party. Data is only shared with our essential sub-processors (Hugging Face, Supabase, and Upstash) to maintain platform functionality.</p>
                </section>
              </CardContent>
            </Card>

            <footer className="text-center py-6 text-muted-foreground text-xs italic">
              Last Updated: May 12, 2026
            </footer>
          </div>
        </div>
      </PageTitle>
    </ProjectDashboardLayout>
  );
};
