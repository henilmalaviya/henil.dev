<script lang="ts">

    const getAge = (birthDate) => {
        return Math.floor((new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10);
    }

    $: age = getAge("2006-04-06");

</script>

<div class="introduction w-full min-h-screen flex justify-center px-16 py-32" id="#introduction">
    <div class="avatar-wrapper">
        <div class="md:w-[300px] w-[200px]">
            <div class="w-full avatar">
                <div class="w-full rounded-full">
                    <img alt="Profile Picture" src="/henil-malaviya.jpg" />
                </div>
            </div>
        </div>
    </div>

    <div class="mx-10"/>

    <div class="py-10">

        <p class="font-bold text-7xl">Hey, I'm <span class="text-primary">Henil</span></p>
        <div class="my-5" />
        <p class="max-w-2xl text-xl">I am {age}. Currently a self taught <span class="text-primary">Full Stack web developer</span> with a goal to become cyber security expert. I do most of the projects my self and try to be better at my work. I have mostly touched every Javascript web and backend framework.</p>
        <div class="my-8" />
        <a href="mailto:henilmalaviya06@gmail.com" class="btn">Contact me</a>

    </div>
</div>

<style scoped>
    .introduction {
        flex-direction: row;
    }
    
    @media only screen and (max-width: 767px){
        .introduction {
            flex-direction: column;
        }
        .avatar-wrapper{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>