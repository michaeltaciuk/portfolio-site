import React from "react";
import Link from 'next/link';
  
export default function Footer() {
  return (
    <div className="foot">
        <Link href="https://github.com/michaeltaciuk" >
            <a className="foot-link">GitHub</a>
        </Link>
        <Link href="https://linkedin.com/in/michaeltaciuk">
            <a className="foot-link">LinkedIn</a>
        </Link>
        <Link href="https://twitter.com/michael_taciuk">
            <a className="foot-link">Twitter</a>
        </Link>
    </div>
  )
}