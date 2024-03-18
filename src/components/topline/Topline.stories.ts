import { Topline } from "./";
import { Header } from "../Header";
import { User } from "../User";

export default {
  title: "Topline",
  components: {
    Topline,
    Header,
    User,
  },
};

export const defaultView = () => ({
  components: {
    Topline,
    Header,
    User,
  },
  data() {
    return {};
  },
  template: `
    <Topline>
        <template #headline>
            <Header avatarUrl="https://i.pravatar.cc/300" />
        </template>
        <template #content>
            <ul class="stories__list" style=" display: flex; justify-content: space-between;"> 
                <li class="stories__item" v-for="i in 10" :key="i">
                    <User username="User Name" avatarUrl="https://i.pravatar.cc/300" vClass="stories" />
                </li>
            </ul>
        </template>
    </Topline>
  `,
});
