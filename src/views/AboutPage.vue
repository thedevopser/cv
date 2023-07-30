<template>
  <div class="flex flex-col text-green-400 mx-auto w-9/12 space-y-8">
    <h2 class="text-3xl font-bold mb-10">À propos de moi</h2>
    <p class="text-xl" v-for="(paragraph, index) in animatedParagraphs" :key="index">
      {{ paragraph }}
      <span class="cursor" v-if="index === animatedParagraphs.length - 1"></span>
    </p>  </div>
</template>

<script>
import {ref, onMounted} from 'vue';

export default {
  setup() {
    const animatedParagraphs = ref([]);

    const animateText = () => {
      const paragraphs = [
        'Bonjour, je suis Sylvain ANGLADE (@TheDevOpser)',
        'Je suis un développeur web autodidacte qui est passionné par la technologie et la musique. En tant que geek dans l\'âme, j\'ai toujours été fasciné par l\'impact de la technologie sur notre vie quotidienne. Cette fascination a déclenché en moi le désir d\'apprendre à programmer, me conduisant à devenir développeur web.',
        'Je me spécialise en Symfony, un puissant framework PHP qui me permet de créer des applications web robustes et efficaces. J\'aime la flexibilité et la puissance que Symfony offre, et je suis constamment à la recherche de nouvelles façons d\'améliorer mes compétences et de maîtriser encore plus ce framework.',
        'En plus du développement web, je suis également un dev-ops à part entière. J\'apprécie l\'aspect multifonctionnel de ce rôle, qui me permet d\'avoir une vision globale des projets sur lesquels je travaille. Cela me permet non seulement de construire des applications, mais aussi de m\'assurer qu\'elles sont déployées et maintenues efficacement.',
        'En dehors du monde du développement web, je suis un grand amateur de musique. Que ce soit pour coder, se détendre ou tout simplement passer le temps, la musique est une partie constante de ma vie. Elle me donne l\'énergie dont j\'ai besoin pour rester concentré et motivé, même lors des défis les plus difficiles.',
        'Mon parcours en tant que développeur autodidacte a été à la fois difficile et gratifiant. Chaque jour est une nouvelle occasion d\'apprendre quelque chose de nouveau et de résoudre des problèmes uniques. La passion qui m\'anime me pousse à aller plus loin et à toujours chercher à m\'améliorer. J\'espère que vous apprécierez de découvrir mon travail autant que j\'apprécie de le créer.'

      ];

      let paragraphIndex = 0;
      let charIndex = 0;

      const intervalId = setInterval(() => {
        if (paragraphIndex < paragraphs.length) {
          if (charIndex < paragraphs[paragraphIndex].length) {
            if (animatedParagraphs.value[paragraphIndex] === undefined) {
              animatedParagraphs.value[paragraphIndex] = '';
            }
            animatedParagraphs.value[paragraphIndex] += paragraphs[paragraphIndex].charAt(charIndex);
            charIndex++;
          } else {
            paragraphIndex++;
            charIndex = 0;
          }
        } else {
          clearInterval(intervalId);
        }
      }, 50);
    };

    onMounted(animateText);

    return {
      animatedParagraphs
    }
  }
}
</script>

<style>

</style>
