import {computed, reactive, watch} from 'vue';
import gsap from 'gsap';

export const colorList = [
  '#334552',
  '#B34335',
  '#6E9FA5',
  '#A2C3AC',
  '#C8846C',
];

export default function useGdp(gdpR = [], maxSize = 0) {
  const maxValue = computed(() => {
    return gdpR.length ? Math.max(...gdpR.map((item) => item.value)) : 0;
  });

  const gdpTargetRef = computed(() =>
    gdpR.map((item, index) => ({
      ...item,
      color: colorList[index],
      size: (maxSize / maxValue.value) * item.value,
    }))
  );

  const resultR = reactive([]);

  watch(
    gdpTargetRef,
    (newV = []) => {
      for (let i = 0, len = newV.length; i < len; i++) {
        if (!resultR[i]) {
          resultR[i] = {
            ...newV[i],
            size: 0,
          };
        }
        gsap.to(resultR[i], {
          ...newV[i],
          duration: 1,
        });
      }
    },
    {deep: true}
  );

  return resultR;
}
