<template>
  <div class="about">
    <h2>About Us</h2>
    <h3>How Do We Know So Much About You?</h3>
    <p>“To know and not to know, to be conscious of complete truthfulness while telling carefully constructed lies, to hold simultaneously two opinions which cancelled out, knowing them to be contradictory and believing in both of them, to use logic against logic, to repudiate morality while laying claim to it, to believe that democracy was impossible and that the Party was the guardian of democracy, to forget whatever it was necessary to forget, then to draw it back into memory again at the moment when it was needed, and then promptly to forget it again: and above all, to apply the same process to the process itself. That was the ultimate subtlety: consciously to induce unconsciousness, and then, once again, to become unconscious of the act of hypnosis you had just performed. Even to understand the word ‘doublethink’ involved the use of doublethink.”</p>
    <img
      src="https://images.unsplash.com/photo-1517920366573-9d35a519b7c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      alt
    />
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
}
h2,
h3 {
  text-align: center;
}
p {
  margin-top: 15px;
  text-align: center;
}
img {
  width: 30%;
  border-radius: 50%;
  margin-top: 15px;
  height: 300px;
  align-self: center;
}
@media (max-width: 700px) {
  img {
    height: 100%;
  }
}
</style>