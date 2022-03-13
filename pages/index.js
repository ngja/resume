import { capabilities } from "../content/capabiliity";
import { experiences } from "../content/experience";

export default function Home() {

  return (
    <div>
      <section>
        <h1>장한솔</h1>
        <div>
          소프트웨어 엔지니어로 일하고 있습니다.
          문제 해결 자체를 좋아하고 남아 있는 문제가 있으면 참지 못합니다.
          비효율적인 업무를 싫어하고 생산성 향상에 많은 고민을 하고 있습니다.
        </div>
      </section>

      <hr/>

      <section>
        <div>
          <div>
            <h2>경험</h2>
          </div>
          <div>
            <h3>NAVER Cloud</h3>
            <span>Backend Developer</span>
            <br/>
            <span>2019.11 ~ 현재</span>
          </div>
          <div>
            {
              <ul>
                {
                  experiences.map(experience =>
                    <li key={experience.id}>
                      <h4>{experience.title}</h4>
                      <ul>
                        {
                          experience.contents.map(content =>
                            <li key={content.id}>
                              {content.content}
                            </li>
                          )
                        }
                      </ul>
                    </li>)
                }
              </ul>
            }
          </div>
        </div>
      </section>

      <hr/>

      <section>
        <div>
          <h2>역량</h2>
        </div>
        <div>
          <ul>
            {
              capabilities.map(capability => <li key={capability.id}>{capability.content}</li>)
            }
          </ul>
        </div>
      </section>

      <hr/>

      <footer>
        <div>
          <a href="https://github.com/pinus-densiflora">GitHub</a>
        </div>
      </footer>
    </div>
  )
}
