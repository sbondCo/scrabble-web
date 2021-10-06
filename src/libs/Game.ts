import Server from "./Server";

export default class Game {
  public static init() {
    Server.init();
  }

  public static new() {
    console.log("new game");
    Server.sendMsg({ job: 100 });
  }
}
