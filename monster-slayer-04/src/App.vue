<template>
  <div id="app">
    <div class="container">
      
      <div class="row section">
        <div class="col-md-6">
          <h2 class="text-center page-header">you</h2>
          <div class="healthbar">
            <div class="healthbar__inside text-center" :style="playerStyle">{{ playerHealth }}</div>
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="text-center page-header">monster</h2>
          <div class="healthbar">
            <div class="healthbar__inside text-center" :style="monsterStyle">{{ monsterHealth }}</div>
          </div>
        </div>
      </div>

      <div class="row controls section" v-if="!gameIsRunning">
        <div class="col-md-12">
          <button id="start-game" type="button" class="btn btn-default" @click="startGame">start new game</button>
        </div>
      </div>
      
      <section class="row controls section" v-else>
        <div class="col-md-12">
          <div class="btn-group" role="group">
            <button id="attack" type="button" class="btn btn-default" @click="attack">attack</button>
            <button id="special-attack" type="button" class="btn btn-default" @click="specAttack">special attack</button>
            <button id="heal" type="button" class="btn btn-default" @click="heal">heal</button>
            <button id="give-up" type="button" class="btn btn-default" @click="giveUp">give up</button>
          </div>
        </div>
      </section>
      
      <div class="row log section" v-if="turns.length > 0">
        <div class="col-md-12">
          <ul class="list-group">
            <li class="list-group-item" :class="{ 'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer }" v-for="turn in turns">{{ turn.text }}<span class="badge">{{ turn.damage }}</span></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
      }
    },
    computed: {
      playerStyle() {
        return {
          width: this.playerHealth + '%'
        }
      },
      monsterStyle() {
        return {
          width: this.monsterHealth + '%'
        }
      },
      logStyle() {
        // return this.turns
      }
    },
    methods: {
      startGame() {
        this.gameIsRunning = true;
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.turns = [];
      },
      attack() {
        this.monsterAttack( 10, 3 );
        this.playerAttack( 12, 5 );
      },
      specAttack() {
        this.monsterAttack( 20, 10 );
        this.playerAttack( 12, 5 );
      },
      heal() {
        if ( this.playerHealth <= 90 ) {
          this.playerHealth += 10;
        } else {
          this.playerHealth = 100;
        }
        this.monsterAttack( 6, 2 );
      },
      giveUp() {
        this.gameIsRunning = false;
        this.turns = [];
      },
      calcDamage( max, min ) {
        return Math.max( Math.floor( Math.random() * max ) + 1, min );
      },
      monsterAttack( max, min ) {
        let damage = this.calcDamage( max, min );
        this.monsterHealth -= damage;
        this.turns.unshift({
          isPlayer: false,
          damage: damage,
          text: 'Player hits Monster for'
        });
        if ( this.checkWin() ) {
          return;
        }
      },
      playerAttack( max, min ) {
        let damage = this.calcDamage( max, min )
        this.playerHealth -= damage;
        this.turns.unshift({
          isPlayer: true,
          damage: damage,
          text: 'Monter hits Player for'
        });
        this.checkWin();
      },
      checkWin() {
        if ( this.monsterHealth <= 0 ) {
          if ( confirm( 'You won! New game?' ) ) {
            this.startGame();
          } else {
            this.gameIsRunning = false;
          }
          return true;
        } else if ( this.playerHealth <= 0 ) {
          if ( confirm( 'You lost! New game?' ) ) {
            this.startGame();
          } else {
            this.gameIsRunning = false;
          }
          return true;
        }
        return false;
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .section {
    margin: 0 0 40px;
  }
  .healthbar {
    background-color: #eee;
  }
  .healthbar__inside {
    background-color: green;
    margin: 0;
    color: white;
    padding: 10px 0;
  }
  .btn {
    text-transform: uppercase;
  }
  .page-header {
    text-transform: uppercase;
  }
  .player-turn {
    color: blue;
    background-color: #e4e8ff;
  }
  .monster-turn {
    color: red;
    background-color: #ffc0c1;
  }
</style>
