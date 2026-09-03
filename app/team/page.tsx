import Image from "next/image"

const teamMembers = [
  {
    name: "Alka Lakadia",
    role: "President of Innovation", // Updated title
    bio: "As a Co-founder and the President of Innovation, I help students validate ideas, build MVPs, and connect with mentors and real-world industry support. I also help plan events, workshops, and guest speaker sessions. My passion lives at the intersection of AI, startups, and creating spaces where women feel empowered to build fearlessly. When I'm not fueling the next wave of changemakers, you'll probably find me chasing sunsets at Mem U, exploring new cafés and restaurants, listening to music, or deep in a founder brainstorm. Always up for chatting about startups, ideas, or life over good coffee or boba.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20at%2011.28.21%E2%80%AFPM-biLUeehHlLD82BWoiFkmjmg89bs5bs.png",
  },
  {
    name: "Trinity Krohn",
    role: "President of Discovery",
    bio: "As President of Discovery, I help cultivate curiosity and confidence by organizing workshops, speaker events, and leadership experiences that encourage students to dive into entrepreneurship. Outside of WE, you'll find me listening to podcasts, exploring new coffee shops, or taking long walks!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20at%2011.28.36%E2%80%AFPM-k8wymxgDaIFSEn2jb4JD2PkAdTpt6b.png",
  },
  {
    name: "Olivia Pozza",
    role: "VP of Marketing",
    bio: "Hi everyone! I'm Olivia, and I'm thrilled to serve as VP of Marketing of the Women in Entrepreneurship student organization at UW–Madison. I co-founded WE to empower ambitious and creative women to connect, collaborate, and grow in whatever step they may be in their entrepreneurial journeys. I'm studying Consumer Behavior & Marketplace Studies, Entrepreneurship, and Business, and I'm passionate about turning bold ideas into real impact. Co-founding this club with Trinity has been one of the most rewarding parts of college, and I'm excited to help others build confidence and access the tools they need to launch ventures. Whether it's through hosting events, creating content, or providing mentorship, I'm eager to help WE thrive on campus. Outside of WE, you'll find me grabbing a matcha latte on State Street, hitting the gym, exploring new study spots, FaceTiming my family (mostly asking to see the dog), shopping, and spending time with friends. Can't wait to connect with you all!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20at%2011.28.48%E2%80%AFPM-x4Kcma6MAz2sGckSvj0JFIGiwdLEk0.png",
  },
  {
    name: "Samantha Fong",
    role: "VP of Finance",
    bio: "Hello! My name is Samantha, and some of my interests include biking, international traveling, and reading. My role as VP of Finance includes handling finances, grants, and fundraising, and I'm excited to kick off this year with fun and awesome events!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20at%2011.29.45%E2%80%AFPM-HfW26e9F6QcBOifsg6Eqbpgh7lX1nY.png",
  },
  {
    name: "Ella Riutta",
    role: "VP of External",
    bio: "As VP of Events for Women in Entrepreneurship, I am dedicated to creating impactful experiences that bring our community together. I lead the planning and execution of our club's events, and I ensure that every detail aligns with our mission to empower and connect aspiring female leaders. Outside of WE, you'll find me working with the fashion tech startup Cloud Closet, planning my next travel adventure, or at a coffee shop for a strong chai latte!",
    image: "/assets/ella.jpg",
  },
  {
    name: "Kaitlyn Marking",
    role: "VP of Events",
    bio: "I am Kaitlyn Marking, VP of Events, and I am a double major in Entrepreneurship and Management, with a Certificate in Consulting. This year I will work to connect students with industry professionals, foster meaningful networking opportunities, and support the development of future women leaders. I am passionate about creating engaging experiences that encourage innovation and build a strong community of ambitious women. I can't wait to continue to work with like-minded Women and continue to grow this club at UW-Madison.",
    image: "/assets/kaitlyn.jpg",
  },
  {
    name: "Symone",
    role: "VP of Internal",
    bio: "",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Faythe",
    role: "VP of Member Relations",
    bio: "Hi everyone! I'm excited to serve as your VP of Member Relations and have the opportunity to create meaningful experiences that bring our members together while giving back to the community. I'm studying Human Development and Family Studies while also pursuing a Business Certificate, and I'm passionate about connecting with others and finding ways to bring entrepreneurship and community involvement together. Outside of WE, I enjoy spending time with friends, working out, and volunteering!",
    image: "/assets/faythe.jpg",
  },
]

export default function Team() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Meet Our Executive Team</h1>
          <p className="page-subtitle">
            The passionate leaders driving Women in Entrepreneurship forward, committed to fostering innovation,
            leadership, and success among women entrepreneurs.
          </p>
        </div>

        {/* Executive Team Photo with Alka and Trinity photos on sides */}
        <div className="team-photos-grid" style={{ marginBottom: "60px", display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "20px", alignItems: "center" }}>
          <div className="team-photo-item" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
            <Image
              src="/assets/IMG_9272.jpg"
              alt="Alka and Trinity"
              width={400}
              height={500}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              className="team-photo-image"
            />
          </div>
          <div className="team-photo-item team-photo-center" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
            <Image
              src="/assets/IMG_0828.jpeg"
              alt="WE Executive Team"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              priority
              className="team-photo-image"
            />
          </div>
          <div className="team-photo-item" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
            <Image
              src="/assets/IMG_0832.jpeg"
              alt="Alka and Trinity"
              width={400}
              height={500}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              className="team-photo-image"
            />
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={400} // Updated width
                height={400} // Updated height for better portrait fit
                className="team-member-image"
              />
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
