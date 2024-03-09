
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace Cinema_HD.Controllers;

[ApiController]
[Route("movie/api")]

public class MovieAPIController : ControllerBase
{


  [HttpGet("movie")]
  public async Task<IActionResult> Get([FromQuery] int page = 1)
  {


    using (var httpClient = new HttpClient())
    {
      var response = await httpClient.GetAsync("https://api.themoviedb.org/3/discover/movie?api_key=249f222afb1002186f4d88b2b5418b55&language=en-US&sort_by=popularity.desc&include_video=true&page=" + page);

      if (response.IsSuccessStatusCode)
      {
        var content = await response.Content.ReadAsStringAsync();


        dynamic jsonObj = JsonSerializer.Deserialize<dynamic>(content)!;
        return Ok(jsonObj);

      }
      else
      {
        return StatusCode((int)response.StatusCode);
      }
    }
  }


  [HttpGet("search")]
  public async Task<IActionResult> search([FromQuery] string search)
  {
    using (var httpClient = new HttpClient())
    {
      var response = await httpClient.GetAsync("https://api.themoviedb.org/3/search/movie?api_key=249f222afb1002186f4d88b2b5418b55&language=en-US&query=" + search);

      if (response.IsSuccessStatusCode)
      {
        var content = await response.Content.ReadAsStringAsync();


        dynamic jsonObj = JsonSerializer.Deserialize<dynamic>(content)!;
        return Ok(jsonObj);

      }
      else
      {
        return StatusCode((int)response.StatusCode);
      }
    }
  }


}
