function eidCountdown() {
  const eid = new Date("June 16, 2026 00:00:00").getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const diff = eid - now;

    if (diff <= 0) {
      console.log("🎉 Eid Mubarak!");
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // document.writeln(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  }, 1000);
}
