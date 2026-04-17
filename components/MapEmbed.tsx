// components/MapEmbed.tsx
import React from 'react';

// สร้าง Interface เพื่อให้สามารถรับ src จากภายนอกได้ (เผื่อต้องใช้แสดงหลายที่)
interface MapEmbedProps {
  src?: string;
  title?: string;
}

export default function MapEmbed({ 
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.992945714124!2d100.6159063!3d13.7185564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d602f066abcf9%3A0xc405b52c677f1ca4!2z4Lie4Lik4LiB4Lip4Liy4Lin4Li04Lil4Lil4LmMIOC4nuC4seC4kuC4meC4suC4geC4suC4ow!5e0!3m2!1sth!2sth!4v1776422086479!5m2!1sth!2sth", // ใส่ URL Embed จริงของคุณตรงนี้เป็นค่าเริ่มต้น
  title = "แผนที่ - Pruksavill" 
}: MapEmbedProps) {
  
  return (
    <div className="w-full h-56 md:h-64 rounded-xl overflow-hidden shadow-md bg-gray-100">
      <iframe
        title={title}
        src={src}
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}