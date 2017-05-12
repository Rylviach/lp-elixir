defmodule LandingPage.PageController do
  use LandingPage.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
