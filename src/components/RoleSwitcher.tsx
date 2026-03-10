import { useState } from "react";

interface Role {
  name: string;
  permissions: string[];
  accent: string;
}

const accentBorder: Record<string, string> = {
  amber: "border-[hsl(37,91%,55%)]",
  blue: "border-[hsl(217,91%,60%)]",
  green: "border-[hsl(160,68%,42%)]",
};

const accentText: Record<string, string> = {
  amber: "text-accent-amber",
  blue: "text-accent-blue",
  green: "text-accent-green",
};

const accentBg: Record<string, string> = {
  amber: "bg-[hsl(37,91%,55%)]",
  blue: "bg-[hsl(217,91%,60%)]",
  green: "bg-[hsl(160,68%,42%)]",
};

const RoleSwitcher = ({ roles }: { roles: Role[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flash, setFlash] = useState(false);
  const active = roles[activeIndex];

  const switchRole = (idx: number) => {
    if (idx === activeIndex) return;
    setFlash(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setFlash(false);
    }, 300);
  };

  return (
    <div>
      <div className="font-mono text-[10px] text-muted-foreground mb-4">ROLE-BASED ACCESS CONTROL</div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6">
        {roles.map((role, i) => (
          <button
            key={role.name}
            onClick={() => switchRole(i)}
            className={`font-mono text-[10px] px-3 py-1.5 border transition-all duration-150 ${
              i === activeIndex
                ? `${accentBorder[role.accent]} ${accentText[role.accent]} bg-background`
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {role.name}
          </button>
        ))}
      </div>

      {/* Permission display */}
      <div
        className={`border p-4 transition-all duration-150 ${
          flash ? "opacity-20 border-foreground" : `opacity-100 ${accentBorder[active.accent]}`
        }`}
      >
        <div className={`font-mono text-xs mb-3 ${accentText[active.accent]}`}>
          {active.name} PERMISSIONS
        </div>
        <ul className="space-y-2">
          {active.permissions.map((perm) => (
            <li key={perm} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className={`w-1.5 h-1.5 rounded-full ${accentBg[active.accent]}`} />
              {perm}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoleSwitcher;
