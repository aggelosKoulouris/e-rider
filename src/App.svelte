<script>
	import { installRouter } from 'pwa-helpers/router.js';
	import {view, onRouteChange} from './router.js'

	export let appName;

	installRouter(onRouteChange)
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/settings">Settings</a>
		<a href="/shift-calculator">Shift Calculator</a>
	</nav>
</header>

<main>
	<h1>{appName}</h1>
	<svelte:component this={$view} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>