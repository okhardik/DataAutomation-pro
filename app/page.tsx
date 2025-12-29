"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Zap, Cpu, Code2, BarChart3 } from "lucide-react"

export default function Home() {
  const handleEmailClick = () => {
    const email = "okayhardik@gmail.com"
    const subject = "Interested in Connecting"
    const body = "Hi Hardik, I am interested in connecting, lmk a suitable time to connect"
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-40 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-lg bg-background/40 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-lg font-bold tracking-widest text-muted-foreground">FLOWCRAFT</div>
          <div className="flex items-center gap-8">
            <a
              href="#solutions"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition duration-300"
            >
              Solutions
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight text-balance">
                Automate Everything.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Build Smart Ops.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Process automation and intelligent systems for any business. Specializing in API integrations, payments,
                BBPS, and cards consultancy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="gap-3 px-8 text-base font-semibold bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 animate-glow"
                onClick={handleEmailClick}
              >
                Discuss an Idea. <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Hero visual element */}
          <div className="mt-20 relative">
            <div className="relative border border-primary/30 rounded-lg p-8 bg-primary/5 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="scan-effect"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-accent text-sm font-mono tracking-wider">AUTOMATION</div>
                  <p className="text-xs text-muted-foreground">For any business</p>
                </div>
                <div className="space-y-2">
                  <div className="text-accent text-sm font-mono tracking-wider">PROCESS DESIGN</div>
                  <p className="text-xs text-muted-foreground">Workflow optimization</p>
                </div>
                <div className="space-y-2">
                  <div className="text-accent text-sm font-mono tracking-wider">CONSULTANCY</div>
                  <p className="text-xs text-muted-foreground">APIs, Payments, BBPS</p>
                </div>
                <div className="space-y-2">
                  <div className="text-accent text-sm font-mono tracking-wider">RECONCILIATION</div>
                  <p className="text-xs text-muted-foreground">Smart matching & analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 px-6 border-t border-primary/20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Specialize In
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              General automation expertise with deep specialization in fintech infrastructure and payments consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* First Card: Automation (PRIMARY) */}
            <Card className="group relative p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/40 hover:border-accent/70 hover:shadow-lg hover:shadow-accent/20 transition-all duration-500 overflow-hidden ring-1 ring-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Automation for Everyone</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We design and build intelligent automation systems across any industry. Reduce manual work, drive
                  efficiency, and scale operations.
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Business process automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>AI-powered workflow intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>End-to-end system architecture</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Second Card: Consultancy (SECONDARY) */}
            <Card className="group relative p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code2 className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Fintech Consultancy</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Build robust payment systems and API integrations. Partner with us to architect fintech operations.
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>API integrations & architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Payment systems & operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Technical leadership & strategy</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Third Card: Payment Systems (TERTIARY) */}
            <Card className="group relative p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Payments & BBPS</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Deep expertise in payment infrastructure and bill payment systems. Built to scale and reconcile
                  seamlessly.
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>UPI, credit cards, prepaid cards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>BBPS integration & optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Smart reconciliation systems</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 px-6 border-t border-primary/20 bg-gradient-to-b from-primary/5 to-background"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-balance">
            Automating Operations.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Everywhere.</span>
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              We build intelligent automation systems for any business. Our specialty is automating the tedious
              stuff—the manual workflows, repetitive tasks, and error-prone processes that slow teams down.
            </p>

            <p>
              Beyond general automation, we bring deep expertise in{" "}
              <span className="text-accent font-semibold">
                API integrations, payment systems, BBPS, and fintech operations
              </span>
              . We've architected complex payment flows across UPI, credit cards, prepaid instruments, and bill payment
              systems. This gives us a unique edge in understanding both the technical and operational challenges of
              building fintech infrastructure.
            </p>

            <p>
              Our approach is consultative. We don't just build features—we partner with teams to architect operations
              from the ground up, streamline existing systems, and design automation that multiplies productivity.
              Whether you need general process automation or specialized fintech consultancy,{" "}
              <span className="text-primary font-semibold">
                we focus on solutions that scale, integrate cleanly, and work intelligently.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 border-t border-primary/20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Ready to Automate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Your Operations?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's build systems that reduce manual work, scale operations, and integrate seamlessly with your
            infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gap-3 px-10 py-6 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 animate-glow"
              onClick={handleEmailClick}
            >
              Let's Connect <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-16 px-6 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <p className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                FLOWCRAFT
              </p>
              <p className="text-sm text-muted-foreground">Automation and fintech operations consultancy.</p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4 text-foreground">Expertise</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#solutions" className="hover:text-primary transition">
                    Automation
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-primary transition">
                    Fintech Consultancy
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-primary transition">
                    Payments & BBPS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4 text-foreground">Company</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4 text-foreground">Get in Touch</p>
              <p className="text-sm text-primary font-mono">okayhardik@gmail.com</p>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 FlowCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
