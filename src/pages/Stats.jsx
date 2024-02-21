export const Stats = () => {
  const stats = "classement";
  const scores = JSON.parse(localStorage.getItem('scores')) || [];

  // Créer une liste de scores pour l'affichage
  const scoreList = scores.map((score, index) => (
    <p key={index}>Name: {score.name}, Trials: {score.trials}</p>
  ));

  return (
    <>
      <h1>{stats}</h1>
      {scoreList}
    </>
  );
}