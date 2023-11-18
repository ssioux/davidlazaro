import './game.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'
import { calculateBestMove, initGame } from 'chess-ai'
import { useMediaQuery } from 'react-responsive'

function Game() {
  // mQuery for chess
  const isPhone = useMediaQuery({
    query: '(max-width: 1200px)',
  })
  const classBtn = isPhone ? 'chess-btn-phone' : 'chess-btn'
  // ai-skill (0-2)
  const [aiSkill, setAiSkill] = useState(0)
  const [easyBtn, setEasyBtn] = useState(classBtn)
  const [mediumBtn, setMediumBtn] = useState(classBtn)
  const [hardBtn, setHardBtn] = useState(classBtn)

  // inCheck Alert
  const [inCheckAlert, setInCheckAlert] = useState('bordered')
  // new Game
  const chess = new Chess()
  const [game, setGame] = useState(chess)

  useEffect(() => {
    initGame(game, aiSkill) // From 0 - 2 ai-level
  }, [game, aiSkill])

  // Dificulty
  const easy = () => {
    if (isPhone) {
      setEasyBtn('activeBtn-phone')
      setMediumBtn('chess-btn-phone')
      setHardBtn('chess-btn-phone')
    } else {
      setEasyBtn('activeBtn')
      setMediumBtn('chess-btn')
      setHardBtn('chess-btn')
    }

    setAiSkill(0)
    game.reset()
  }

  const medium = () => {
    if (isPhone) {
      setEasyBtn('chess-btn-phone')
      setMediumBtn('activeBtn-phone')
      setHardBtn('chess-btn-phone')
    } else {
      setEasyBtn('chess-btn')
      setMediumBtn('activeBtn')
      setHardBtn('chess-btn')
    }

    setAiSkill(1)
    game.reset()
  }

  const hard = () => {
    if (isPhone) {
      setEasyBtn('chess-btn-phone')
      setMediumBtn('chess-btn-phone')
      setHardBtn('activeBtn-phone')
    } else {
      setEasyBtn('chess-btn')
      setMediumBtn('chess-btn')
      setHardBtn('activeBtn')
    }

    setAiSkill(2)

    game.reset()
  }
  const reset = () => {
    setAiSkill(aiSkill)
    game.reset()
    onDrop()
  }
  const undo = () => {
    setAiSkill(aiSkill)
    game.undo()
    game.undo()
    onDrop()
  }

  //Let's perform a function on the game state

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g }
      modify(update)
      return update
    })
  }
  //Movement of computer
  function makeRandomMove() {
    const possibleMove = game.moves()
    // 1. Draw
    if (game.in_draw() || game.in_stalemate()) {
      alert('Draw')
    }
    // 2. Check Mate
    if (game.in_checkmate() || possibleMove.length === 0) {
      alert('Check Mate')
    }

    // 2.1
    if (!game.in_check() && possibleMove.length === 0) {
      alert('Draw')
      game.game_over()
    }
    // 3. Game Over
    if (game.game_over()) {
      alert('Game Over')
    }
    //select ai move
    const aiMove = calculateBestMove()

    //play random move
    safeGameMutate((game) => {
      game.move(aiMove)
    })

    // onCheck?
    game.in_check() ? setInCheckAlert('onCheck') : setInCheckAlert('bordered')
  }

  //Perform an action when a piece is droped by a user

  function onDrop(source, target) {
    let move = null

    safeGameMutate((game) => {
      move = game.move({
        from: source,
        to: target,
        promotion: 'q',
      })
    })

    // 1. illegal move
    if (move == null) return false
    // 2. move for ai
    setTimeout(makeRandomMove, 200)

    return true
  }

  return (
    <>
      <div className="container chess-page">
        <div className="board">
          <div className="btn-group">
            <button onClick={easy} className={easyBtn}>
              Easy
            </button>
            <button onClick={medium} className={mediumBtn}>
              Medium
            </button>
            <button onClick={hard} className={hardBtn}>
              Hard
            </button>
          </div>

          <div className={`${inCheckAlert}`}>
            <Chessboard
              customDropSquareStyle={{
                boxShadow: 'inset 0 0 1px 6px rgba(255, 215, 0, 0.73)',
              }}
              customBoardStyle={{
                borderRadius: '5px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5 ',
              }}
              customDarkSquareStyle={{ backgroundColor: '#961C1C' }}
              customLightSquareStyle={{ backgroundColor: '#fff' }}
              position={game.fen()}
              onPieceDrop={onDrop}
              boardWidth={isPhone ? 333 : 800}
            />
          </div>
          <div className="btn-group">
            <button
              onClick={reset}
              className={isPhone ? 'chess-btn-bottom' : 'chess-btn'}
            >
              Reset
            </button>
            <button
              onClick={undo}
              className={isPhone ? 'chess-btn-bottom' : 'chess-btn'}
            >
              Undo
            </button>
          </div>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Game
