function eidCountdown() {
  const eid = new Date("June 16, 2026 00:00:00").getTime();
  const now = new Date().getTime();

  const diff = eid - now;

  if (diff <= 0) {
    console.log("🎉 Eid Mubarak!");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  console.log(days + " days left for Eid-ul-Adha");
}

// run function
eidCountdown();