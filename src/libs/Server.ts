export default class Server {
  private static wsConn: WebSocket;

  private static get wsOpen() {
    return this.wsConn.readyState === this.wsConn.OPEN;
  }

  /**
   * Initialize connection to game server.
   */
  public static init() {
    this.wsConn = new WebSocket("ws://127.0.0.1:8080");
    this.wsConn.onopen = () => this.setupWS();
  }

  public static sendMsg(msg: Object) {
    if (this.wsOpen) {
      this.wsConn.send(JSON.stringify(msg));

      return;
    }

    console.error("Could not send message through closed websocket connection.");
  }

  private static setupWS() {
    if (this.wsOpen) {
      this.sendMsg({ job: 1 });

      this.wsConn.addEventListener("message", (ev) => {
        const msg = ev.data;

        console.log("Recieved a msg:", msg);
      });
    }
  }
}
