
### API Documentation (docs/api.md)

```markdown
# API Documentation

## Endpoints

### Events

#### Get Event by Name
- **URL:** `/events/:name`
- **Method:** `GET`
- **Description:** Retrieves detailed information about an event, including related stages, set times, and meet and greets.
- **Response:**
  ```json
  {
    "event": {
      "id": 1,
      "name": "Summer Festival",
      "date": "2024-06-20T00:00:00.000Z",
      "stages": [
        {
          "id": 1,
          "name": "Main Stage",
          "set_times": [
            {
              "start_time": "18:00:00",
              "end_time": "19:00:00"
            }
          ],
          "meet_and_greets": [
            {
              "start_time": "20:00:00",
              "end_time": "21:00:00",
              "meet_location": "Backstage"
            }
          ]
        }
      ]
    }
  }
