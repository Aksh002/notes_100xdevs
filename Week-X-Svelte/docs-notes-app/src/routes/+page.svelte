<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script>
    // State:-
    let count = $state(0);

    // Deep State:-
    let numbers = $state([1, 2, 3, 4]);
    function addNumber() {
	    numbers[numbers.length] = numbers.length + 1;
    }
    function addNumber1() {
	    numbers.push(numbers.length + 1);
    }

    // Derived:-
    let total = $derived(numbers.reduce((t, n) => t + n, 0));

    // Inspecting state:-
    console.log($state.snapshot(numbers));
    //or
    $inspect(numbers)

    // Effects:-
    let elapsed = $state(0);
	let interval = $state(1000);

	$effect(() => {
        const id = setInterval(() => {
            elapsed += 1;
        }, interval);

        return () => {
            clearInterval(id);
        };
    });

    // Universal Reactivity
    export const counter = $state({
        count: 0
    });

    // Props:-
    let { answer } = $props();  // At the recieving end

    // FallBack default for prop
    //let { answer = 'a mystery' } = $props();

    // A way to send multiple props
    const pkg = {
		name: 'svelte',
		version: 5,
		description: 'blazing fast',
		website: 'https://svelte.dev'
	};
    //<PackageInfo {...pkg} />                                  // PRop spreading, passing them

    //let { name, version, description, website } = $props();   // Recieving them
    //let { name, ...stuff } = $props();                        // PRop spreading way of recieving props
    //let stuff = $props();                                     // PRop spreading way of recieving props


    // If block
    let count2 = $state(0);

	function increment() {
		count2 += 1;
	}
    // See "IF block part for followUp code"
</script>

<br>
    // IF Block 
<br>
    <button onclick={increment}>
        Clicked {count2}
        {count2 === 1 ? 'time' : 'times'}
    </button>
    {#if count2>5}
        <p>{count2} is greater then 5</p>
    {/if}


