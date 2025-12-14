export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 space-y-24">
      {/* HERO SECTION */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Muhammad Ubeid Teelhawod
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Data Science Undergraduate · AI & Innovation Intern
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          I’m a Data Science undergraduate currently pursuing my degree, with
          hands-on experience in SQL, databases, Python, and modern web
          technologies gained through coursework and an industry internship. I
          enjoy learning by building and applying what I study to real-world
          problems.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-3xl">
        <h2 className="text-2xl font-semibold">About Me</h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
          I am currently pursuing a degree in Data Science while completing an
          internship that has exposed me to real-world applications of data,
          databases, and software development. Through my academic work and
          internship experience, I have developed a strong interest in how data
          and technology can be used to solve practical problems.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          I value building strong foundations — writing clean code, understanding
          how systems work end-to-end, and continuously improving my technical
          and problem-solving skills.
        </p>
      </section>

      {/* SKILLS & TOOLS */}
      <section className="max-w-3xl">
        <h2 className="text-2xl font-semibold">Skills & Tools</h2>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-medium">Programming</h3>
            <p className="text-gray-700">
              Python, SQL, R, C
            </p>
          </div>

          <div>
            <h3 className="font-medium">Data & Analytics</h3>
            <p className="text-gray-700">
              Data Analysis, Data Visualisation, Tableau
            </p>
          </div>

          <div>
            <h3 className="font-medium">Web & Databases</h3>
            <p className="text-gray-700">
              React, Relational Databases, SQL Databases
            </p>
          </div>

          <div>
            <h3 className="font-medium">Other</h3>
            <p className="text-gray-700">
              LaTeX, Problem Solving, Teamwork, Fast Learner
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-3xl">
        <h2 className="text-2xl font-semibold">Experience</h2>

        <div className="mt-6">
          <h3 className="font-medium">AI & Innovation Intern</h3>
          <p className="text-gray-600">
            BDO IT Consulting Ltd · Mauritius
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>
              Worked with SQL and relational databases to query, structure, and
              analyse data.
            </li>
            <li>
              Used Python for data processing, automation, and analysis tasks.
            </li>
            <li>
              Gained hands-on exposure to React and modern web development
              workflows.
            </li>
            <li>
              Collaborated with team members in a professional consulting
              environment.
            </li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-3xl">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-medium">
              Data Visualisation Report (Tableau)
            </h3>
            <p className="text-gray-700">
              Built interactive dashboards and visualisations to analyse datasets
              and communicate insights effectively using Tableau.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Data Analysis in R</h3>
            <p className="text-gray-700">
              Performed data cleaning, analysis, and interpretation using R as
              part of coursework projects.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Game Development in C</h3>
            <p className="text-gray-700">
              Developed a grid-based game in C to strengthen programming
              fundamentals, logic, and problem-solving skills.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Academic Report Writing (LaTeX)</h3>
            <p className="text-gray-700">
              Produced structured academic reports using LaTeX, focusing on
              clarity, formatting, and technical documentation.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-3xl">
        <h2 className="text-2xl font-semibold">Education</h2>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-medium">
              BSc (Hons) Data Science
            </h3>
            <p className="text-gray-600">
              University of Mauritius (CY Cergy Paris Université affiliation)
            </p>
            <p className="text-gray-700">
              2024 – Present
            </p>
          </div>

          <div>
            <h3 className="font-medium">
              ACCA – Level 1
            </h3>
            <p className="text-gray-700">
              In progress
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
