exports.seed = function(knex) {
  return knex('characters').del()
    .then(function () {
      return knex('characters').insert([
        {
          name: 'Akuma',
          height: '178cm',
          weight: '90kg',
          style: 'Satsui no Hadou',
          firstAppearance: 'Super Street Fighter II Turbo',
          occupation: 'Martial Artist',
          rival: 'Ryu'
        },
        {
          name: 'Cammy',
          height: '155cm',
          weight: '61kg',
          style: 'Delta Red',
          firstAppearance: 'Super Street Fighter II: The New Challengers',
          occupation: 'MI6 Delta Red Operative',
          rival: 'M.Bison'
        },
        {
          name: 'Chun-Li',
          height: '165cm',
          weight: 'Secret',
          style: 'Chinese martial arts',
          firstAppearance: 'Street Fighter II: The World Warrior',
          occupation: 'Interpol Officer',
          rival: 'Vega'
        },
        {
          name: 'Dee Jay',
          height: '184cm',
          weight: '92kg',
          style: 'Kickboxing',
          firstAppearance: 'Super Street Fighter II: The New Challengers',
          occupation: 'Kickboxer',
          rival: 'Zangief'
        },
        {
          name: 'Ken',
          height: '180cm',
          weight: '77kg',
          style: 'Ansatsuken',
          firstAppearance: 'Street Fighter',
          occupation: 'Martial Artist',
          rival: 'Ryu'
        },
        {
          name: 'M.Bison',
          height: '180cm',
          weight: '96kg',
          style: 'Psycho Power',
          firstAppearance: 'Street Fighter II: The World Warrior',
          occupation: 'Shadaloo King',
          rival: 'Chun-Li'
        },
        {
          name: 'Ryu',
          height: '180cm',
          weight: '76kg',
          style: 'Ansatsuken',
          firstAppearance: 'Street Fighter',
          occupation: 'Martial Artist',
          rival: 'Ken'
        },
        {
          name: 'Vega',
          height: '186cm',
          weight: '84kg',
          style: 'Spanish ninjutsu',
          firstAppearance: 'Street Fighter II: The World Warrior',
          occupation: 'Shadaloo King',
          rival: 'Chun-Li'
        },
        {
          name: 'Zangief',
          height: '214cm',
          weight: '115kg',
          style: 'Russian and American pro wrestling',
          firstAppearance: 'Street Fighter II: The World Warrior',
          occupation: 'Wrestler',
          rival: 'Ken'
        },
      ]);
    });
};
