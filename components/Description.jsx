"use client"; // Add this directive
import DOMPurify from "dompurify";

const MyComponent = ({ post }) => {
  const sanitizedDescription = DOMPurify.sanitize(post.description);
    
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
    ></div>
  );
};

export default MyComponent;