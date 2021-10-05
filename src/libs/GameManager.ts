export default class GameManager {
  private static wsConn: WebSocket;

  public static init() {
    console.log("init");
    this.wsConn = new WebSocket("ws://127.0.0.1:8080");
    this.wsConn.onopen = () => this.setupWS();
  }

  private static setupWS() {
    this.wsConn.send("hello2");
  }
}
