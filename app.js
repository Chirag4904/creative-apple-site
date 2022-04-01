//first page
const tlIntro = gsap.timeline({
	scrollTrigger: {
		// markers: { startColor: "red", endColor: "red" },
		trigger: ".first-page",
		start: "0%",
		end: "100%",
		pin: true,
		pinSpacing: false,
	},
});

//highlighting second page text
const tlH = gsap.timeline({
	scrollTrigger: {
		trigger: ".second-page",
		// markers: { startColor: "blue", endColor: "blue" },
		scrub: true,
		start: "-40%",
		end: "40%",
	},
});

tlH.fromTo(
	".highlight",
	{ color: "rgba(255,255,255,0.4)" },
	{ color: "rgba(255,255,255,1)", stagger: 1 }
);

const tlHRemove = gsap.timeline({
	scrollTrigger: {
		trigger: ".second-page",
		// markers: { startColor: "red", endColor: "red" },
		scrub: true,
		start: "-20%",
		end: "50%",
	},
});

tlHRemove.to(".highlight", { color: "rgba(255,255,255,0.4)", stagger: 1 });
