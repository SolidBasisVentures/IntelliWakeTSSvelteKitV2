<script lang='ts'>
	import {ArrayRange} from '@solidbasisventures/intelliwaketsfoundation'
	import {autoFocus} from '$lib/index'
	import Modal from '$lib/Modal.svelte'
	import ModalFormAction from '$lib/ModalFormAction.svelte'
	import ActivityOverlay from '$lib/ActivityOverlay.svelte'
	import DisplayHTML from '$lib/DisplayHTML.svelte'
	import DropDown from '$lib/DropDown.svelte'

	let showModal: boolean | null = null

	let otherModal = false

	let showForm = false

	let showDD: undefined | null
</script>

<div class='h-full p-4'>
	<h1>Modal</h1>

	<p>
		<button on:click={() => showModal = !showModal}>Open Modal</button>
	</p>

	<p>
		<button on:click={() => otherModal = !otherModal}>Other Modal</button>
	</p>
	<p>
		<button on:click={() => showForm = !showForm}>Open Form Modal</button>
	</p>
	<p class='text-blue-500 underline'>
		<button on:click={() => showDD = null}>Open DD Modal</button>
	</p>
	<p>
		<DropDown>
			<span slot='button'>DD Control Fixed</span>
			<div slot='actions'>
				<div>Test</div>
				<div>Test</div>
			</div>
		</DropDown>
		<DropDown>
			<span slot='button'>DD Control</span>
			<div slot='actions'>
				<div>Test</div>
				<div>Test</div>
			</div>
		</DropDown>

	</p>
	<div class='w-64 aspect-square bg-amber-200 border border-blue-600 relative'>
		<ActivityOverlay/>
		Here
	</div>
	<p>
		<DisplayHTML value='Here is some html'/>
	</p>
	<p>
		<DisplayHTML value='Here is some html<script lang=ts>console.info("Test")</script>'/>
	</p>
	<p>
		<DisplayHTML value='Here is <b>some</b> html'/>
	</p>
	<p>
		<DisplayHTML value='Here is <b>some</b> html<script>console.info("Test")</script>'/>
	</p>
	<p>
		<DisplayHTML value='Here is some html https://www.intelliwake.com'/>
	</p>
	<p>
		<DisplayHTML value='Here is some html https://www.intelliwake.com'
		             anchorClasses='text-blue-500 underline'/>
	</p>
</div>

<Modal bind:show={showModal}
       marginForStickyHeader>
	<span slot='header'>Test Modal</span>
	<div slot='body'>
		<div class='sticky top-0 bg-slate-600'>This is the header</div>
		{#each ArrayRange(500) as arrayItem}
			<p>This is the body {arrayItem}</p>
		{/each}
	</div>
</Modal>

<Modal show={otherModal}
       okButton={null}
       marginForStickyHeader
       on:close={() => otherModal = false}>
	<span slot='header'>Other Modal</span>
	<div slot='body'>
		{#if otherModal}
			<div class='sticky top-0 bg-slate-600'>This is the header</div>
			{#each ArrayRange(500) as arrayItem}
				<p>This is the body {arrayItem}</p>
			{/each}
		{/if}
	</div>
</Modal>

<ModalFormAction action='?/testAction'
                 formEnhance={{invalidate: 'app:Test', verbose: true}}
                 bind:show={showForm}>
	<span slot='header'>Test Form</span>
	<div slot='body'>
		{#if showForm}
			<input name='id'
			       type='number'
			       use:autoFocus
			       value='100'/>
		{/if}
	</div>
</ModalFormAction>

<Modal bind:show={showDD}
       noShowValue={undefined}
       okButton={null}>
	<span slot='header'>DD Modal</span>
	<div slot='body'>
		<div>
			<DropDown>
				<span slot='button'>DD Control Fixed</span>
				<div slot='actions'>
					{#each ArrayRange(20) as arrayItem}
						<div>This is the body {arrayItem}</div>
					{/each}
				</div>
			</DropDown>
			<DropDown>
				<span slot='button'>DD Control</span>
				<div slot='actions'>
					{#each ArrayRange(20) as arrayItem}
						<div>This is the body {arrayItem}</div>
					{/each}
				</div>
			</DropDown>
		</div>
		{#each ArrayRange(2) as arrayItem}
			<div>This is the body {arrayItem}</div>
		{/each}
		<!--		<div class='fixed left-1/2 top-1/2 w-[10em] h-[25em] bg-white text-primary-main'>-->
		<!--			Fixed box-->
		<!--		</div>-->
	</div>
</Modal>

{#each ArrayRange(500) as ar}
	<Modal show={false}/>
{/each}
