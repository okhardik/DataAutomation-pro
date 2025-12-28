"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Zap, Network, TrendingUp, Cpu } from "lucide-react"

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
          <div className="text-2xl font-bold tracking-widest">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent animate-glow">
              HARDIK
            </span>
          </div>
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
                Payment Rails{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  That Scale
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                UPI, credit cards, PPI, BBPS. AI-powered automation. Reconciliation that works. Building fintech
                infrastructure that doesn't break.
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
              <Button
                variant="outline"
                size="lg"
                className="px-8 text-base font-semibold border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 bg-transparent"
              >
                Explore Work
              </Button>
            </div>
          </div>

          {/* Hero visual element */}
          <div className="mt-20 relative">
            <div className="relative border border-primary/30 rounded-lg p-8 bg-primary/5 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="scan-effect"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-accent text-sm font-mono tracking-wider">UPI</div>
                  <p className="text-xs text-muted-foreground">Real-time payments</p>
                </div>
                <div className="space-y-2">
                  <div className="text-accent text-sm font-mono tracking-wider">CARDS</div>
                  <p className="text-xs text-muted-foreground">Credit & PPI</p>
                </div>
                <div className="space-y-2">
                  <div className="text-accent text-sm font-mono tracking-wider">BBPS</div>
                  <p className="text-xs text-muted-foreground">Bill payments</p>
                </div>
                <div className="space-y-2">
                  <div className="text-accent text-sm font-mono tracking-wider">AI/RECON</div>
                  <p className="text-xs text-muted-foreground">Smart automation</p>
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
              Expertise Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Fintech</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Payment systems, process automation, and reconciliation—all built for scale and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group relative p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Network className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Payment Rails</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Building robust infrastructure from ground zero.
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>UPI integration & transaction handling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Credit cards & PPI payment processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>BBPS bill payment system setup</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="group relative p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/40 hover:border-accent/70 hover:shadow-lg hover:shadow-accent/20 transition-all duration-500 overflow-hidden ring-1 ring-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-2xl font-bold mb-3">AI & Automation</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Process design and intelligent automation at scale.
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Process design & optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>AI-powered workflow automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Intelligent reconciliation systems</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="group relative p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Reconciliation</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">Transform payment data into insights.</p>
                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Automated transaction reconciliation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Real-time payment analytics dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Dispute resolution & reporting</span>
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
            Your Fintech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Operations Partner
            </span>
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm Hardik, a freelance consultant specializing in fintech payment systems and process automation. I've
              built expertise across{" "}
              <span className="text-primary font-semibold">
                UPI, credit/prepaid card integrations, BBPS, and complex payment workflows
              </span>
              —helping startups move money reliably while keeping operations lean.
            </p>

            <p>
              Beyond payment rails, I'm passionate about{" "}
              <span className="text-accent font-semibold">setting up robust processes and using AI to automate</span>{" "}
              the tedious work that slows teams down. Whether it's reconciliation, dispute resolution, or end-to-end
              payment workflows, I design systems that work silently in the background so your team can focus on growth.
            </p>

            <p>
              My approach combines deep technical knowledge of payment systems with strategic thinking about process
              design. I don't just implement integrations—I architect solutions that are scalable, maintainable, and
              intelligent. The result? Payment systems that just work, operations that run smoother, and a team that's
              freed up to focus on what truly matters.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 border-t border-primary/20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Ready to Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Fintech That Works?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's architect payment systems that scale, automate operations intelligently, and keep your fintech running
            like clockwork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gap-3 px-10 py-6 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 animate-glow"
              onClick={handleEmailClick}
            >
              Let's Connect <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-6 text-lg font-semibold border-primary/50 text-primary hover:bg-primary/10 transition-all bg-transparent"
              onClick={() => (window.location.href = "mailto:okayhardik@gmail.com")}
            >
              okayhardik@gmail.com
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
                HARDIK
              </p>
              <p className="text-sm text-muted-foreground">
                Fintech payment systems & process automation for startups.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4 text-foreground">Solutions</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#solutions" className="hover:text-primary transition">
                    Payment Rails
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-primary transition">
                    AI & Automation
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-primary transition">
                    Reconciliation
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
            <p>&copy; 2025 Hardik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
