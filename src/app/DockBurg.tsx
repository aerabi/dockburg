"use client";
import React from "react";

export default function DockBurg() {
  const links = {
    sessionize: "https://sessionize.com/ctencf-freiburg/",
    cncf: "https://community.cncf.io/cloud-native-freiburg/",
    meetup: "https://www.meetup.com/docker-black-forest/",
    discord: "https://discord.gg/D5HEB9MZ",
  };

  const hallOfFame = [
    {
      name: "Timo Stark",
      role: "Docker Captain • Nuremberg 🇩🇪",
      img: "/timo-stark.jpeg",
      link: "https://www.linkedin.com/in/timostark/",
    },
    {
      name: "Lize Raes",
      role: "Docker Captain • Basel 🇨🇭",
      img: "/lize-raes.jpeg",
      link: "https://www.linkedin.com/in/lize-raes-a8a34110/",
    },
    {
      name: "Jonas Scholz",
      role: "Docker Captain • Karlsruhe 🇩🇪",
      img: "/jonas-scholz.jpeg",
      link: "https://www.linkedin.com/in/jonas-scholz-490274163/",
    },
    {
      name: "Johannes Großmann",
      role: "Software Engineer at Docker • Munich 🇩🇪",
      img: "/johannes-grossmann.jpeg",
      link: "https://www.linkedin.com/in/johannes-grossmann-286582171/",
    },
    {
      name: "Maxime Clement",
      role: "Software Engineer at Docker • Lille 🇫🇷",
      img: "/maxime-clement.jpeg",
      link: "https://www.linkedin.com/in/maxcleme/",
    },
    {
      name: "Nicholas Dille",
      role: "Docker Captain • Freiburg 🇩🇪",
      img: "/nicholas-dille.jpeg",
      link: "https://www.linkedin.com/in/nicholasdille/",
    },
  ];

  const pastMeetups = [
    {
      n: 14,
      date: "12.06.2025",
      title: "Create AI Apps with Java and Docker + How to Crack Fire",
      url: "https://www.meetup.com/docker-black-forest/events/307290156/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/docker-black-forest/",
      hosting: "JobRad GmbH",
      speakers: "Lize Raes (Docker Captain, Basel 🇨🇭) & Jonas Scholz (Docker Captain, Karlsruhe 🇩🇪)",
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 13,
      date: "23.04.2025",
      title: "Unconference - KubeCon + CloudNativeCon Europe",
      url: "https://community.cncf.io/events/details/cncf-cloud-native-freiburg-presents-unconference-kubecon-cloudnativecon-europe/",
      group: "Cloud Native Freiburg",
      groupUrl: "https://community.cncf.io/cloud-native-freiburg/",
      hosting: "Reservix",
      speakers: "Community-driven (Unconference)",
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 12,
      date: "15.04.2025",
      title: "Spring into Containers 2025",
      url: "https://www.meetup.com/docker-black-forest/events/306436089/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/docker-black-forest/",
      hosting: "JobRad GmbH",
      speakers: "Julian König (Docker Captain, Freiburg 🇩🇪) & Andreas Harter (SRE Lead at JobRad, Freiburg 🇩🇪)",
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 11,
      date: "25.10.2024",
      title: "Hackdockerfest 2024",
      url: "https://www.meetup.com/docker-black-forest/events/303671875/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      hosting: "Reservix",
      speakers: "Timo Stark (Docker Captain, Nürnberg 🇩🇪)",
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 10,
      date: "23.05.2024",
      title: "Introduction to Docker + JobRad's Journey",
      url: "https://www.meetup.com/docker-black-forest/events/300262553/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      hosting: "JobRad HQ",
      speakers: "Julian König (Docker Captain, Freiburg 🇩🇪) & Andreas Harter (SRE Lead at JobRad, Freiburg 🇩🇪)",
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 9,
      date: "02.02.2024",
      title: "Docker Debug + CI",
      url: "https://www.meetup.com/docker-black-forest/events/298649748/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      hosting: "InxMail GmbH",
      speakers: "Johannes Großmann (Software Engineer at Docker, Munich 🇩🇪) & Maxime Clement (Software Engineer at Docker, Lille 🇫🇷)",
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 8,
      date: "13.10.2023",
      title: "Hackdockerfest 2023 🍺",
      url: "https://www.meetup.com/docker-black-forest/events/296483825/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      hosting: "Recyda GmbH",
      speakers: "Julian König (Docker Captain, Freiburg 🇩🇪) & Stefan Ruf (Software Engineer at InxMail, Freiburg 🇩🇪)",
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 7,
      date: "21.06.2023",
      title: "Docker Init and Docker Setup",
      url: "https://www.meetup.com/docker-black-forest/events/293749060/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      hosting: "InxMail GmbH",
      speakers: "Julian König, Nicholas Dille, and Martin W.",
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 6,
      date: "13.04.2023",
      title: "Docker's 10th Birthday",
      url: "https://www.meetup.com/docker-black-forest/events/292284637/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      hosting: "Recyda",
      speakers: "Nicholas Dille & Daniel Leinfelder (CEO of Smart LGT GmbH, Freiburg 🇩🇪)",
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 5,
      date: "07.03.2023",
      title: "DockSecOps: Scan Your Image + The Big Fix",
      url: "https://www.meetup.com/docker-black-forest/events/291760084/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      hosting: "Recyda GmbH",
      speakers: "Mohammad-Ali A'râbi (Docker Captain, Freiburg 🇩🇪) & Daniel Leinfelder (CEO of Smart LGT GmbH, Freiburg 🇩🇪)",
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 4,
      date: "11.01.2023",
      title: "Docker + WASM = Beta",
      url: "https://www.meetup.com/docker-black-forest/events/290197640/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      city: "Freiburg",
      country: "Germany",
      hosting: "Esono AG",
      speakers: "Daniel Leinfelder",
    },
    {
      n: 3,
      date: "11.10.2022",
      title: "Hackdockerfest in Freiburg",
      url: "https://www.meetup.com/docker-black-forest/events/287845505/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      city: "Freiburg",
      country: "Germany",
      hosting: "Recyda GmbH",
      speakers: "Mathias Leidecker (Head of Engineering at Recyda GmbH, Freiburg 🇩🇪)",
    },
    {
      n: 2,
      date: "01.09.2022",
      title: "Docker Community All Hands #6 Watching Party",
      url: "https://www.meetup.com/docker-black-forest/events/286196885/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      city: "Freiburg",
      country: "Germany",
      hosting: "Recyda GmbH",
      speakers: "Speakers of Docker Community All Hands #6",
    },
    {
      n: 1,
      date: "19.08.2022",
      title: "Docker Desktop Introduction",
      url: "https://www.linkedin.com/posts/megha-kadur_docker-desktop-introduction-fr-19-aug-activity-6966266555160494080-X6Ch?utm_source=linkedin_share&utm_medium=member_desktop_web",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      city: "Online",
      country: "Online",
      speakers: "Megha Kadur (Docker Captain, Bengaluru 🇮🇳)",
      hosting: "Online",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">DockBurg</h1>
          <p className="mt-3 text-xl opacity-90">
            Home of Cloud Native Freiburg & Docker Black Forest
          </p>
          <p className="mt-2 text-lg">
            🎉 Celebrating 10 Years of CNCF at <span className="font-semibold">cTENcf</span>
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={links.sessionize}
               className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">🎤 Apply
              to Speak</a>
            <a href={links.cncf}
               className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">🌐 CNCF
              Community Page</a>
            <a href={links.meetup}
               className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">👥 Meetup
              Group</a>
            <a href={links.discord}
               className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">💬 Join
              Discord</a>
          </div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 leading-relaxed">
          DockBurg is the community hub for <strong>Cloud Native Freiburg</strong> — a fusion of the long-running
          <em> Docker Black Forest Meetup</em> and <em> DevOps Meetups Freiburg</em>.
        </p>
        <p className="mt-3 opacity-90">
          We have hosted more than <strong>10 meetups</strong> with Docker Captains, CNCF Ambassadors, and local tech
          leaders.
        </p>
        <p className="mt-3">
          Organized by three community leads (including you) under the CNCF Local program.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">🎤 Hall of Fame</h2>
          <p className="text-center mt-2 opacity-80">A selection of speakers & Captains who joined us onsite.</p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hallOfFame.map((p) => (
              <a key={p.name} href={p.link ?? "#"}
                 className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col items-center text-center">
                <img src={p.img} alt={p.name}
                     className="w-36 h-36 rounded-full object-cover ring-4 ring-white shadow-md" loading="lazy"/>
                <div className="mt-4">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <p className="text-sm opacity-80">{p.role}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-center mt-6 text-sm opacity-70">
            Missing someone? We recently hosted Docker Captains <strong>Lize Raes</strong> and <strong>Jonas
            Scholz</strong> onsite — send us a link to their preferred headshots to feature here.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center">📅 Past Meetups</h2>
        <div className="mt-6 overflow-x-auto bg-white rounded-2xl shadow">
          <table className="min-w-full text-left">
            <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-3">#</th>
              <th className="p-3">Date</th>
              <th className="p-3">Event</th>
              <th className="p-3">Group</th>
              <th className="p-3">Hosting Company</th>
              <th className="p-3">Speakers</th>
            </tr>
            </thead>
            <tbody>
            {pastMeetups.map((e) => (
              <tr key={e.n} className="border-b last:border-none hover:bg-gray-50">
                <td className="p-3 font-semibold">{e.n}</td>
                <td className="p-3 whitespace-nowrap">{e.date}</td>
                <td className="p-3">
                  <a href={e.url} className="text-blue-700 underline hover:text-blue-900">
                    {e.title}
                  </a>
                </td>
                <td className="p-3">
                  <a href={e.groupUrl} className="text-blue-700 underline hover:text-blue-900">
                    {e.group}
                  </a>
                </td>
                <td className="p-3">{e.hosting}</td>
                <td className="p-3">{e.speakers}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm opacity-70 text-center">If we missed your talk, ping us on Discord to add it. 💬</p>
      </section>

      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">Join Us at cTENcf 🎉</h2>
          <p className="mt-2 opacity-90">We’re celebrating 10 years of CNCF. Be part of the story!</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={links.sessionize}
               className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">🎤 Apply
              to Speak</a>
            <a href={links.cncf}
               className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">🌐 CNCF
              Community Page</a>
            <a href={links.meetup}
               className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">👥 Meetup
              Group</a>
            <a href={links.discord}
               className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">💬 Join
              Discord</a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p>© 2025 DockBurg · Built by the Cloud Native Freiburg organizers</p>
        </div>
      </footer>
    </div>
  );
}
