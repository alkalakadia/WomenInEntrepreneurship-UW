import Image from "next/image"

const teamMembers = [
  {
    name: "Alka Lakadia",
    role: "President of Innovation", // Updated title
    bio: "As a Co-founder and the President of Innovation, I lead the VentureHER pipeline, a hands-on track that helps students validate ideas, build MVPs, and connect with mentors and real-world industry support. My passion lives at the intersection of AI, startups, and creating spaces where women feel empowered to build fearlessly. When I'm not fueling the next wave of changemakers, you'll probably find me chasing sunsets at Mem U, exploring new cafés and restaurants, listening to music, or deep in a founder brainstorm. Always up for chatting about startups, ideas, or life over good coffee or boba.",
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
    role: "VP of External", // Updated role
    bio: "Hi everyone! I'm Olivia, and I'm thrilled to serve as VP of External of the Women in Entrepreneurship student organization at UW–Madison. I co-founded WE to empower ambitious and creative women to connect, collaborate, and grow in whatever step they may be in their entrepreneurial journeys. I'm studying Consumer Behavior & Marketplace Studies, Entrepreneurship, and Business, and I'm passionate about turning bold ideas into real impact. Co-founding this club with Trinity has been one of the most rewarding parts of college, and I'm excited to help others build confidence and access the tools they need to launch ventures. Whether it's through hosting events, creating content, or providing mentorship, I'm eager to help WE thrive on campus. Outside of WE, you'll find me grabbing a matcha latte on State Street, hitting the gym, exploring new study spots, FaceTiming my family (mostly asking to see the dog), shopping, and spending time with friends. Can't wait to connect with you all!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20at%2011.28.48%E2%80%AFPM-x4Kcma6MAz2sGckSvj0JFIGiwdLEk0.png",
  },
  {
    name: "Audrey Kessler",
    role: "VP of Marketing",
    bio: "As VP of Marketing for Women in Entrepreneurship, I help amplify our mission by creating media content that showcases our incredible community and events. I love finding creative ways to tell our story and inspire more women to explore entrepreneurship. Outside of WE, you'll find me drinking coffee and hanging out with good friends!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20at%2011.29.19%E2%80%AFPM-b9fuXcqIQB2pCeflISjj7oNVoe9Oej.png",
  },
  {
    name: "Samantha Fong",
    role: "VP of Finance",
    bio: "Hello! My name is Samantha, and some of my interests include biking, international traveling, and reading. My role as VP of Finance includes handling finances, grants, and fundraising, and I'm excited to kick off this year with fun and awesome events!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20at%2011.29.45%E2%80%AFPM-HfW26e9F6QcBOifsg6Eqbpgh7lX1nY.png",
  },
  {
    name: "Aveyna Mao",
    role: "VP of Events",
    bio: "Hi, I'm Aveyna! I'm serving as the Vice President of Events for Women in Entrepreneurship, this school year. I'm so excited to help this organization grow as well as getting to enhance my skill set in innovation and creation. Outside of WE, I'm always looking for ways to immerse myself with leadership work, data analytics projects and community involvement opportunities. Feel free to reach out to WE if you have any specific events you want from us!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20at%2011.29.07%E2%80%AFPM-j7yULutEzmZmcnN6Gq7GwS7Bt97vyU.png",
  },
  {
    name: "Kailie Pumper",
    role: "VP of Internal Relations",
    bio: "I am deeply excited to be the VP of Internal Relations where I manage internal club operations, including record-keeping, meeting coordination, and communications to support WE's mission. Driven by a passion for innovation, I love exploring new ideas and experiences, as well supporting my community through volunteering, and growing my knowledge in the financial industry to build a purposeful and impactful career.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20at%2011.29.34%E2%80%AFPM-083Elk9RjtRCOqhBfPyLJdvpQsk2CA.png",
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
