"use client";
import React from "react";

export default function DockBurg() {
  const links = {
    sessionize: "https://sessionize.com/docker-meetup-freiburg",
    cncf: "https://community.cncf.io/cloud-native-freiburg/",
    meetup: "https://www.meetup.com/docker-black-forest/",
    discord: "https://discord.gg/D5HEB9MZ",
  };

  // —— Master directory: Speakers (add headshots to /public/speakers/*) ——
  const speakers = [
    { id: "timo-stark", name: "Timo Stark", role: "Docker Captain • Nuremberg 🇩🇪", img: "/speakers/timo-stark.jpeg", link: "https://www.linkedin.com/in/timostark/" },
    { id: "lize-raes", name: "Lize Raes", role: "Docker Captain • Basel 🇨🇭", img: "/speakers/lize-raes.jpeg", link: "https://www.linkedin.com/in/lize-raes-a8a34110/" },
    { id: "jonas-scholz", name: "Jonas Scholz", role: "Docker Captain • Karlsruhe 🇩🇪", img: "/speakers/jonas-scholz.jpeg", link: "https://www.linkedin.com/in/jonas-scholz-490274163/" },
    { id: "johannes-grossmann", name: "Johannes Großmann", role: "Software Engineer at Docker • Munich 🇩🇪", img: "/speakers/johannes-grossmann.jpeg", link: "https://www.linkedin.com/in/johannes-grossmann-286582171/" },
    { id: "maxime-clement", name: "Maxime Clement", role: "Software Engineer at Docker • Lille 🇫🇷", img: "/speakers/maxime-clement.jpeg", link: "https://www.linkedin.com/in/maxcleme/" },
    { id: "nicholas-dille", name: "Nicholas Dille", role: "Docker Captain • Freiburg 🇩🇪", img: "/speakers/nicholas-dille.jpeg", link: "https://www.linkedin.com/in/nicholasdille/" },
    { id: "julian-konig", name: "Julian König", role: "Docker Captain • Freiburg 🇩🇪", img: "/speakers/julian-konig.jpeg", link: "https://www.linkedin.com/in/jkoenig134/" },
    { id: "andreas-harter", name: "Andreas Harter", role: "SRE Lead at JobRad • Freiburg 🇩🇪", img: "/speakers/andreas-harter.jpeg", link: "https://www.linkedin.com/in/andreas-harter/" },
    { id: "stefan-ruf", name: "Stefan Ruf", role: "Software Engineer at InxMail • Freiburg 🇩🇪", img: "/speakers/stefan-ruf.jpeg", link: "https://www.linkedin.com/in/steve192/" },
    { id: "daniel-leinfelder", name: "Daniel Leinfelder", role: "CEO • Smart LGT GmbH • Freiburg 🇩🇪", img: "/speakers/daniel-leinfelder.jpeg", link: "https://www.linkedin.com/in/daniel-leinfelder-589a0a1a0/" },
    { id: "mathias-leidecker", name: "Mathias Leidecker", role: "Head of Engineering • Recyda • Freiburg 🇩🇪", img: "/speakers/mathias-leidecker.jpeg", link: "https://www.linkedin.com/in/mathias-leidecker-015266100/" },
    { id: "megha-kadur", name: "Megha Kadur", role: "Docker Captain • Bengaluru 🇮🇳", img: "/speakers/megha-kadur.jpeg", link: "https://www.linkedin.com/in/megha-kadur/" },
    { id: "mohammad-ali-arabi", name: "Mohammad-Ali A'râbi", role: "Docker Captain • Freiburg 🇩🇪", img: "/speakers/mohammad-ali-arabi.jpeg", link: "https://www.linkedin.com/in/aerabi" },
  ];

  // Helper: fast lookup maps
  const speakerById = Object.fromEntries(speakers.map((s) => [s.id, s]));

  // —— Master directory: Hosting companies (add logos to /public/logos/*) ——
  const hosts = [
    { id: "jobrad", name: "JobRad GmbH", logo: "/logos/jobrad.jpeg", url: "https://www.jobrad.org" },
    { id: "reservix", name: "Reservix GmbH", logo: "/logos/reservix.jpeg", url: "https://www.reservix.net" },
    { id: "recyda", name: "Recyda GmbH", logo: "/logos/recyda.jpeg", url: "https://www.recyda.com" },
    { id: "inxmail", name: "InxMail GmbH", logo: "/logos/inxmail.jpeg", url: "https://www.inxmail.com" },
    { id: "esono", name: "Esono AG", logo: "/logos/esono.jpeg", url: "https://www.esono.de" },
    { id: "online", name: "Online / Virtual", logo: "/logos/online.png", url: "#" },
  ];
  const hostById = Object.fromEntries(hosts.map((h) => [h.id, h]));

  // —— Events reference speakers & hosts by id ——
  const pastMeetups = [
    {
      n: 14,
      date: "12.06.2025",
      title: "Create AI Apps with Java and Docker + How to Crack Fire",
      url: "https://www.meetup.com/docker-black-forest/events/307290156/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/docker-black-forest/",
      hostId: "jobrad",
      speakerIds: ["lize-raes", "jonas-scholz"],
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
      hostId: "reservix",
      speakerIds: [], // unconference
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
      hostId: "jobrad",
      speakerIds: ["julian-konig", "andreas-harter"],
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
      hostId: "reservix",
      speakerIds: ["timo-stark"],
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
      hostId: "jobrad",
      speakerIds: ["julian-konig", "andreas-harter"],
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
      hostId: "inxmail",
      speakerIds: ["johannes-grossmann", "maxime-clement"],
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
      hostId: "recyda",
      speakerIds: ["julian-konig", "stefan-ruf"],
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
      hostId: "inxmail",
      speakerIds: ["julian-konig", "nicholas-dille"],
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
      hostId: "recyda",
      speakerIds: ["nicholas-dille", "daniel-leinfelder"],
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
      hostId: "recyda",
      speakerIds: ["mohammad-ali-arabi", "daniel-leinfelder"],
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
      hostId: "esono",
      speakerIds: ["daniel-leinfelder"],
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 3,
      date: "11.10.2022",
      title: "Hackdockerfest in Freiburg",
      url: "https://www.meetup.com/docker-black-forest/events/287845505/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      hostId: "recyda",
      speakerIds: ["mathias-leidecker"],
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 2,
      date: "01.09.2022",
      title: "Docker Community All Hands #6 Watching Party",
      url: "https://www.meetup.com/docker-black-forest/events/286196885/",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      hostId: "recyda",
      speakerIds: [],
      city: "Freiburg",
      country: "Germany",
    },
    {
      n: 1,
      date: "19.08.2022",
      title: "Docker Desktop Introduction",
      url: "https://www.linkedin.com/posts/megha-kadur_docker-desktop-introduction-fr-19-aug-activity-6966266555160494080-X6Ch?utm_source=linkedin_share&utm_medium=member_desktop_web",
      group: "Docker Black Forest Meetup Group",
      groupUrl: "https://www.meetup.com/Docker-Black-Forest/",
      hostId: "online",
      speakerIds: ["megha-kadur"],
      city: "Online",
      country: "Online",
    },
  ];

  // ——— UI helpers ———
  const SpeakerChip = ({ id }: { id: string }) => {
    const s = speakerById[id];
    if (!s) return null;
    return (
      <a href={s.link ?? "#"} className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition mr-2 mb-2">
        <img src={s.img} alt={s.name} className="h-6 w-6 rounded-full object-cover" />
        <span className="text-sm">{s.name}</span>
      </a>
    );
  };

  const HostCell = ({ id }: { id: string }) => {
    const h = hostById[id];
    if (!h) return <span className="text-sm opacity-70">—</span>;
    return (
      <a href={h.url ?? "#"} className="inline-flex items-center gap-2">
        {h.logo && <img src={h.logo} alt={h.name} className="h-6 w-auto object-contain" />}
        <span>{h.name}</span>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <header className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">DockBurg</h1>
          <p className="mt-3 text-xl opacity-90">Home of Cloud Native Freiburg & Docker Black Forest</p>
          <p className="mt-2 text-lg">🎉 Celebrating 10 Years of CNCF at <span className="font-semibold">cTENcf</span></p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={links.sessionize} className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">🎤 Apply to Speak</a>
            <a href={links.cncf} className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">🌐 CNCF Community Page</a>
            <a href={links.meetup} className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">👥 Meetup Group</a>
            <a href={links.discord} className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">💬 Join Discord</a>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 leading-relaxed">
          DockBurg is the community hub for <strong>Cloud Native Freiburg</strong> and
          <strong> Docker Black Forest Meetup</strong>.
        </p>
        <p className="mt-3 opacity-90">We have hosted more than <strong>10 meetups</strong> with Docker Captains and local tech leaders.</p>
          <p className="mt-3">Organized by Docker Captain <strong>Mohammad-Ali A&#39;râbi</strong> (creator of Docker Black Forest Meetup), DevOps Strategy Advisor <strong>Janosch Deurer</strong> (organizer of the long-running DevOps Meetup Freiburg), and IT Consultant <strong>Clemens Scholz</strong>.</p>
      </section>

      {/* Speakers directory (Hall of Fame) */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">🎤 Speakers & Captains</h2>
          <p className="text-center mt-2 opacity-80">Everyone who has spoken at our meetups (so far).</p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {speakers.map((p) => (
              <a key={p.id} href={p.link ?? "#"} className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col items-center text-center">
                <img src={p.img} alt={p.name} className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-md" loading="lazy" />
                <div className="mt-4">
                  <h3 className="font-bold">{p.name}</h3>
                  <p className="text-sm opacity-80">{p.role}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting partners */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">🏢 Hosting Partners</h2>
          <p className="text-center mt-2 opacity-80">Companies that have hosted DockBurg / Cloud Native Freiburg meetups.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {hosts.filter(h => h.id !== 'online').map((h) => (
              <a key={h.id} href={h.url ?? "#"} className="bg-white rounded-xl shadow p-4 flex items-center justify-center hover:shadow-lg transition">
                {h.logo ? (
                  <img src={h.logo} alt={h.name} className="h-10 w-auto object-contain" />
                ) : (
                  <span className="text-center font-medium">{h.name}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
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
              <th className="p-3">City</th>
              <th className="p-3">Country</th>
            </tr>
            </thead>
            <tbody>
            {pastMeetups.map((e) => (
              <tr key={e.n} className="border-b last:border-none hover:bg-gray-50 align-top">
                <td className="p-3 font-semibold">{e.n}</td>
                <td className="p-3 whitespace-nowrap">{e.date}</td>
                <td className="p-3"><a href={e.url} className="text-blue-700 underline hover:text-blue-900">{e.title}</a></td>
                <td className="p-3"><a href={e.groupUrl} className="text-blue-700 underline hover:text-blue-900">{e.group}</a></td>
                <td className="p-3"><HostCell id={e.hostId} /></td>
                <td className="p-3">
                  <div className="flex flex-wrap">
                    {e.speakerIds && e.speakerIds.length > 0 ? (
                      e.speakerIds.map((id) => <SpeakerChip key={id} id={id} />)
                    ) : (
                      <span className="text-sm opacity-70">—</span>
                    )}
                  </div>
                </td>
                <td className="p-3">{e.city}</td>
                <td className="p-3">{e.country}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm opacity-70 text-center">If we missed your talk, ping us on Discord to add it. 💬</p>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">Join Us at cTENcf 🎉</h2>
          <p className="mt-2 opacity-90">We’re celebrating 10 years of CNCF. Be part of the story!</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={links.sessionize} className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">🎤 Apply to Speak</a>
            <a href={links.cncf} className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">🌐 CNCF Community Page</a>
            <a href={links.meetup} className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">👥 Meetup Group</a>
            <a href={links.discord} className="bg-white text-blue-900 px-6 py-3 rounded-xl shadow-md font-semibold hover:shadow-lg">💬 Join Discord</a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p>© 2025 DockBurg · Built by Mohammad-Ali A&#39;râbi</p>
        </div>
      </footer>
    </div>
  );
}
