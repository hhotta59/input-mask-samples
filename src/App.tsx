import UseMaskInputDemo from './components/UseMaskInputDemo'
import ReactImaskDemo from './components/ReactImaskDemo'
import ReactInputMaskDemo from './components/ReactInputMaskDemo'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>React Input Mask 比較デモ</h1>
      <p>日付入力 (YYYY/MM/DD) のマスク入力ライブラリ比較</p>
      
      <div className="demo-container">
        <UseMaskInputDemo />
        <ReactImaskDemo />
        <ReactInputMaskDemo />
      </div>
    </div>
  )
}

export default App
