import React from "react";
import Link from 'next/link';
  
export default function Footer() {
  return (
    <div className="foot">
      <a href="mailto:michael@taci.uk">michael@taci.uk</a>
      <div>
        <Link href="https://github.com/michaeltaciuk" className="foot-link">
            <a>Github</a>
        </Link>
        <Link href="https://linkedin.com/in/michaeltaciuk">
            <a>Linkedin</a>
        </Link>
        <Link href="https://github.com/in/michaeltaciuk">
            <a>Github</a>
        </Link>
      </div>
    </div>
  )
}