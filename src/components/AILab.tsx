const AILab = () => {
  const prompt =
    `Design a role-based access model where Admin can CRUD all records, ` +
    `Teachers can update only their class data, and Students have read-only access ` +
    `to their own profile. Provide the database policy logic.`;

  const code = `-- Supabase Row Level Security Policy (example)
CREATE POLICY "admin_full_access" ON students
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid()
      AND role = 'admin'
    )
  );

CREATE POLICY "teacher_own_class" ON students
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM class_assignments
      WHERE teacher_id = auth.uid()
      AND class_id = students.class_id
    )
  );

CREATE POLICY "student_own_profile" ON students
  FOR SELECT
  USING (user_id = auth.uid());`;

  return (
    <section id="ailab" className="section-border py-12 sm:py-20 md:py-28 reveal-up">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="font-mono text-xs text-accent-amber mb-6 sm:mb-8">AI LAB</div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border max-w-5xl lift-card">
          <div className="bg-surface p-4 sm:p-6">
            <div className="font-mono text-[10px] text-accent-amber mb-3">PROMPT</div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
              {prompt}
            </p>
          </div>

          <div className="bg-[hsl(240,10%,6%)] p-4 sm:p-6">
            <div className="font-mono text-[10px] text-accent-green mb-3">OUTPUT</div>
            <pre className="font-mono text-[10px] sm:text-[11px] text-muted-foreground leading-relaxed overflow-x-auto whitespace-pre">
              {code}
            </pre>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 max-w-2xl">
          AI is used as an accelerator for exploration, then validated against real-world
          requirements, edge cases, and security constraints.
        </p>
      </div>
    </section>
  );
};

export default AILab;
