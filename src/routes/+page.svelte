<script lang="ts">
	import { EMAIL, EXPERIENCE, GITHUB_URL, PROJECTS, X_URL } from '$lib/const';
	import Icon from '@iconify/svelte';
</script>

{#snippet Header()}
	<div class="flex items-end justify-between">
		<a href="/">
			<h1 class="text-lg font-medium">Henil Malaviya</h1>
		</a>
		<div class="flex gap-1 text-sm">
			<a href={GITHUB_URL} class="muted" target="_blank">Github</a>
			<a href={X_URL} class="muted" target="_blank">X</a>
			<a href="mailto:{EMAIL}" class="muted" target="_blank">Email</a>
		</div>
	</div>
{/snippet}

{#snippet Card({
	title,
	href,
	description,
	subTitle,
	links,
}: {
	title: string;
	href?: string;
	subTitle?: string;
	description?: string;
	links?: ({ icon: string; href: string } | null)[];
})}
	<div class="flex w-full flex-col gap-0 text-left">
		<div class="flex w-full justify-between">
			<!-- title -->
			<h3>{title}</h3>
			{#if links || href}
				<div class="flex gap-1">
					{#if href}
						<a {href} target="_blank" class="muted">
							<Icon icon="mdi:link-variant" width={18} />
						</a>
					{/if}
					{#each links as link}
						{#if !link}{:else}
							<a href={link.href} target="_blank" class="muted"
								><Icon icon={link.icon} width={18} /></a
							>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
		{#if subTitle}
			<p class="text-muted text-xs">{subTitle}</p>
		{/if}
		<p class="text-muted mt-2 text-sm">
			{description}
		</p>
	</div>
{/snippet}

<div class="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-16">
	{@render Header()}

	<div class="mb-4 leading-7">
		<p>
			I'm full-stack developer and junior undergrad student, currently
			interning at <a
				class="accent"
				href="https://ssessa.com"
				target="_blank">ssessa</a
			>. I like to design and build privacy-focused scalable apps for
			modern web. My core stack is Typescript, ElysiaJS, Go and Svelte.
		</p>

		<br />

		<p>
			My programming journey started with small PHP projects and a lot of
			phpMyAdmin during the covid days. I moved into NodeJS and React, and
			around then, TypeScript became my tool of choice. Playing with P5.js
			got me hooked on making simulations, and I kept exploring from
			there. After that, I picked up ExpressJS, HonoJS, and now, on
			ElysiaJS for backend work.
		</p>

		<br />

		<p>
			I've also messed around a bit with Vue.js, Nuxt.js, Rust, Docker,
			and networking. Recently, I've been diving into cryptography and
			digging deeper into Go for backend systems and low-level tools.
		</p>

		<br />

		<p>
			Apart from coding, you would find me playing factorio, listening to
			music, exploring topics in evolutionary biology and <span
				title="OperatorDrewski XD"
			>
				watching military simulation gameplay
			</span>.
		</p>
	</div>

	<div class="grid gap-8 sm:grid-cols-2">
		<div class="flex flex-col gap-4">
			<h2 class="text-muted font-medium">Experience</h2>
			<ul class="group/list flex flex-col">
				{#each EXPERIENCE as experience}
					<li
						class="py-2 transition-opacity group-hover/list:opacity-50 hover:opacity-100"
					>
						{@render Card({
							title: `${experience.role} @ ${experience.company}`,
							href: experience.href,
							subTitle: experience.period,
							description: experience.description,
						})}
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex flex-col gap-4">
			<h2 class="text-muted font-medium">Projects</h2>
			<ul class="group/list flex flex-col">
				{#each PROJECTS as project}
					<li
						class="py-2 transition-opacity group-hover/list:opacity-50 hover:opacity-100"
					>
						{@render Card({
							title: project.name,
							href: project.href,
							description: project.description,
							links: [
								{ href: project.github, icon: 'mdi:github' },
							],
						})}
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="text-muted mt-32 flex items-end justify-between text-xs">
		<span>&copy; 2025 henilmalaviya</span>
		<div class="flex flex-col">
			<span
				>Inspired by <a
					href="https://heywinit.me"
					target="_blank"
					class="muted"
					rel="noopener noreferrer">heywinit.me</a
				></span
			>
			<span
				>Powered by <a
					href="https://svelte.dev"
					target="_blank"
					class="muted"
					rel="noopener noreferrer">Svelte</a
				>
				and
				<a
					href="https://vercel.com"
					target="_blank"
					class="muted"
					rel="noopener noreferrer">Vercel</a
				></span
			>
		</div>
	</div>
</div>
