
const samplePosts = [
  { id: 1, title: 'Introduction to Next.js', summary: 'Learn the basics of Next.js and get started with your first app.' },
  { id: 2, title: 'Advanced Next.js Features', summary: 'Explore advanced patterns and features in Next.js.' },
  { id: 3, title: 'Deploying Next.js Applications', summary: 'Understand the deployment process of Next.js apps on Vercel.' },
];

export default function Home() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <ul className="space-y-4">
        {samplePosts.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow-sm">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}