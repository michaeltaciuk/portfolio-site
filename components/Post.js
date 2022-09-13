import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='card'>
        <img src={post.frontmatter.cover_image} alt='' />

        <div className='post-date'>Posted on {post.frontmatter.date}</div>

        <h3>{post.frontmatter.title}</h3>

        <p>{post.frontmatter.excerpt}</p>

        {post.frontmatter.website != null &&
            <Link href={post.frontmatter.website}>
                <a className='btn'>Try It!</a>
            </Link>
        }
        
    </div>
  )
}