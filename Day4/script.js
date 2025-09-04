const skills = [
  { name: "HTML", proficiency: "Intermediate" },
  { name: "CSS", proficiency: "Advanced" },
  { name: "JavaScript", proficiency: "Beginner" },
  { name: "React", proficiency: "Learning" }
];

const formatted = skills.map(skill => `${skill.name} (${skill.proficiency})`);
console.log(formatted);
