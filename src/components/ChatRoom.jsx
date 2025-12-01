// src/components/SocialLinks.jsx
import React from "react";

export default function SocialLinks() {
  const links = [
    {
      name: "Instagram",
      desc: "My visual journal & life updates",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      url: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=7sp27km"
    },
    {
      name: "TikTok",
      desc: "Short creative videos",
      icon: "https://cdn-icons-png.flaticon.com/512/3046/3046127.png",
      url: "https://www.tiktok.com/@aellaa_vrlte?_r=1&_t=ZS-91r1peXTsS9"
    },
    {
      name: "Twitter",
      desc: "Random thoughts & dev tweets",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
      url: "https://x.com/neyra_sya?t=SMo3RR5PS6eFQvVpfq76JQ&s=08"
    },
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
      {links.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-zinc-900 border border-gray-700 p-5 rounded-xl hover:bg-zinc-800 transition"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              className="w-10 h-10 object-cover rounded-md"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>

          <span className="text-gray-400 text-2xl">›</span>
        </a>
      ))}
    </div>
  );
}
