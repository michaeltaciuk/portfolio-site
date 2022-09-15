import React from "react";
import Link from 'next/link';
  
export default function Footer() {
  return (
    <div className="foot">
      <a href="mailto:michael@taci.uk" className="foot-link">michael@taci.uk</a>
      <div>
        <Link href="https://github.com/michaeltaciuk" >
            <a className="foot-link">Github</a>
        </Link>
        <Link href="https://linkedin.com/in/michaeltaciuk">
            <a className="foot-link">Linkedin</a>
        </Link>
        <Link href="https://twitter.com/michael_taciuk">
            <a className="foot-link">Twitter</a>
        </Link>
      </div>
    </div>
  )
}