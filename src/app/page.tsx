"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroBillboardScroll from "@/components/sections/hero/HeroBillboardScroll";
import TagAbout from "@/components/sections/about/TagAbout";
import FeatureCardFive from "@/components/sections/feature/FeatureCardFive";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { BarChart3, BookOpen, Brain, Building, DollarSign, GraduationCap, HelpCircle, Instagram, Linkedin, MessageSquare, PlayCircle, Smartphone, Sparkles, Star, TrendingUp, Twitter, Users, Youtube, Award } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="LearnHub"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Transform Your Skills with AI-Powered Learning"
          description="Master IT and creative skills through personalized courses, interactive projects, and expert mentorship on our cutting-edge platform"
          tag="Education Platform"
          tagIcon={GraduationCap}
          buttons={[
            {
              text: "Start Learning Today",
              href: "contact"
            },
            {
              text: "Explore Courses",
              href: "product"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395978799-60gtpcil.jpg"
          imageAlt="Modern learning platform dashboard"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Choose Us"
          description="We revolutionize online education by combining cutting-edge AI technology with expert instruction, creating personalized learning experiences that adapt to your pace and help you achieve career success faster than traditional methods."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFive
          title="Platform Features"
          description="Discover the powerful tools and capabilities that make learning engaging and effective"
          tag="Features"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          showIconBoxBackground={true}
          features={[
            {
              title: "AI-Powered Tutoring",
              icon: Brain
            },
            {
              title: "Interactive Lessons",
              icon: PlayCircle
            },
            {
              title: "Progress Tracking",
              icon: BarChart3
            },
            {
              title: "Collaborative Tools",
              icon: Users
            },
            {
              title: "Mobile Learning",
              icon: Smartphone
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Popular Courses"
          description="Explore our most sought-after courses designed by industry experts"
          tag="Courses"
          tagIcon={BookOpen}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "web-dev",
              name: "Complete Web Development",
              price: "$199",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395983582-8dh0g5oj.png",
              imageAlt: "Web development course"
            },
            {
              id: "graphic-design",
              name: "Graphic Design Mastery",
              price: "$149",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395984328-1n9k47xl.jpg",
              imageAlt: "Graphic design course"
            },
            {
              id: "digital-marketing",
              name: "Digital Marketing Pro",
              price: "$179",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395985106-p9q9pa5r.jpg",
              imageAlt: "Digital marketing course"
            },
            {
              id: "data-science",
              name: "Data Science Fundamentals",
              price: "$229",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395985877-7hhttivq.jpg",
              imageAlt: "Data science course"
            },
            {
              id: "ui-ux",
              name: "UI/UX Design Complete",
              price: "$189",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395986618-txqga4qc.jpg",
              imageAlt: "UI UX design course"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Learning Path"
          description="Flexible pricing plans to match your learning goals and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Starter",
              price: "$29/month",
              subtitle: "Perfect for beginners starting their journey",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "Access to 50+ courses",
                "Basic progress tracking",
                "Community forum access",
                "Mobile app access"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$79/month",
              subtitle: "Ideal for serious learners and professionals",
              buttons: [
                {
                  text: "Start Pro",
                  href: "contact"
                },
                {
                  text: "Chat to Sales",
                  href: "contact"
                }
              ],
              features: [
                "Access to all 200+ courses",
                "AI-powered personalization",
                "1-on-1 mentorship sessions",
                "Priority support",
                "Certification programs"
              ]
            },
            {
              id: "enterprise",
              badge: "For Teams",
              badgeIcon: Building,
              price: "$199/month",
              subtitle: "Perfect for organizations and teams",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "Book Demo",
                  href: "contact"
                }
              ],
              features: [
                "Everything in Pro",
                "Team management dashboard",
                "Custom learning paths",
                "Analytics and reporting",
                "Dedicated account manager"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Instructors"
          description="Learn from industry professionals with years of real-world experience"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Lead Web Developer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395987388-rxnmbtar.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Data Science Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395987918-yc9adpy4.jpg",
              imageAlt: "Mike Chen portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "UX/UI Design Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395988447-s7fl5le3.jpg",
              imageAlt: "Emma Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Marketing Strategist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395989057-thd344qo.jpg",
              imageAlt: "David Kim portrait"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Students Say"
          description="Real success stories from learners who transformed their careers"
          tag="Success Stories"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Software Engineer at TechCorp",
              testimonial: "The web development course completely transformed my career. The hands-on projects and mentorship helped me land my dream job in just 6 months.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395987388-rxnmbtar.jpg",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "Mike Rodriguez",
              role: "Data Analyst at StartupXYZ",
              testimonial: "The data science program was exactly what I needed. The AI-powered learning adapted to my pace and the instructors were incredibly supportive.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395987918-yc9adpy4.jpg",
              imageAlt: "Mike Rodriguez portrait"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "UX Designer at DesignCo",
              testimonial: "I loved the interactive approach and real-world projects. The skills I gained here helped me transition from marketing to UX design successfully.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395988447-s7fl5le3.jpg",
              imageAlt: "Emma Thompson portrait"
            },
            {
              id: "4",
              name: "David Park",
              role: "Digital Marketing Manager",
              testimonial: "The digital marketing course gave me practical strategies I could implement immediately. Saw a 300% increase in my campaign performance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395989057-thd344qo.jpg",
              imageAlt: "David Park portrait"
            },
            {
              id: "5",
              name: "Lisa Wang",
              role: "Freelance Designer",
              testimonial: "The flexibility of learning at my own pace while having access to expert mentors made all the difference in my learning journey.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395989630-4isgth1l.jpg",
              imageAlt: "Lisa Wang portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our learning platform"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How does the AI-powered learning work?",
              content: "Our AI system analyzes your learning patterns, strengths, and areas for improvement to create a personalized curriculum that adapts in real-time to optimize your learning experience."
            },
            {
              id: "2",
              title: "Can I access courses on mobile devices?",
              content: "Yes! Our platform is fully responsive and includes dedicated mobile apps for iOS and Android, allowing you to learn anytime, anywhere with seamless synchronization across devices."
            },
            {
              id: "3",
              title: "Do you offer certificates upon completion?",
              content: "Absolutely! We provide industry-recognized certificates for all completed courses. Pro and Enterprise plans also include specialized certification programs with additional credibility."
            },
            {
              id: "4",
              title: "What kind of support do you provide?",
              content: "We offer comprehensive support including 24/7 technical assistance, community forums, expert mentorship sessions, and for Pro/Enterprise users, priority support with dedicated account managers."
            },
            {
              id: "5",
              title: "Can I switch between pricing plans?",
              content: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately for upgrades, while downgrades apply at your next billing cycle to ensure you don't lose access mid-month."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Start Your Learning Journey?"
          description="Join thousands of students who have transformed their careers through our expert-led courses and AI-powered learning platform"
          buttonText="Start Learning"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your full name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your email address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone number (optional)",
              required: false
            },
            {
              name: "experience",
              type: "text",
              placeholder: "Your current experience level",
              required: false
            }
          ]}
          textarea={{
            name: "goals",
            placeholder: "Tell us about your learning goals and what you'd like to achieve...",
            rows: 4,
            required: false
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="LearnHub"
          copyrightText="© 2025 LearnHub. All rights reserved."
          columns={[
            {
              title: "Platform",
              items: [
                {
                  label: "All Courses",
                  href: "product"
                },
                {
                  label: "Features",
                  href: "feature"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Success Stories",
                  href: "testimonial"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "faq"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Community",
                  href: "https://community.learnhub.com"
                },
                {
                  label: "Student Portal",
                  href: "https://portal.learnhub.com"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Careers",
                  href: "https://careers.learnhub.com"
                },
                {
                  label: "Press",
                  href: "https://press.learnhub.com"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/learnhub",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/learnhub",
              ariaLabel: "Connect on LinkedIn"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/learnhub",
              ariaLabel: "Subscribe on YouTube"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/learnhub",
              ariaLabel: "Follow on Instagram"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}