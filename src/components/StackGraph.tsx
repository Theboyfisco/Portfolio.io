import { useEffect, useState } from "react";

const nodes = [
  { id: "nextjs", label: "Next.js", x: 80, y: 60 },
  { id: "supabase", label: "Supabase", x: 300, y: 60 },
  { id: "tailwind", label: "Tailwind", x: 80, y: 170 },
  { id: "postgres", label: "PostgreSQL", x: 300, y: 170 },
  { id: "vercel", label: "Vercel", x: 80, y: 280 },
  { id: "rest", label: "REST APIs", x: 300, y: 280 },
  { id: "typescript", label: "TypeScript", x: 80, y: 380 },
  { id: "testing", label: "Testing", x: 300, y: 380 },
];

const edges = [
  ["nextjs", "supabase"],
  ["nextjs", "tailwind"],
  ["supabase", "postgres"],
  ["tailwind", "vercel"],
  ["postgres", "rest"],
  ["vercel", "rest"],
  ["tailwind", "typescript"],
  ["typescript", "testing"],
  ["rest", "testing"],
];

const StackGraph = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg
      viewBox="0 0 400 440"
      className={`w-full max-w-md mx-auto transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {edges.map(([from, to], i) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        return (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="hsl(240 5% 18%)"
            strokeWidth="1"
            strokeDasharray={visible ? "0" : "4 4"}
          />
        );
      })}
      {nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r="6"
            fill="hsl(37 91% 55%)"
            opacity="0.8"
          >
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="3s"
              repeatCount="indefinite"
              begin={`${Math.random() * 2}s`}
            />
          </circle>
          <text
            x={node.x}
            y={node.y + 22}
            textAnchor="middle"
            fill="hsl(240 6% 55%)"
            fontSize="11"
            fontFamily="Source Code Pro, monospace"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default StackGraph;
