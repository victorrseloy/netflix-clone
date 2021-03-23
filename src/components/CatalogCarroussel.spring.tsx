import React, { useState ,useRef,useLayoutEffect} from "react";
import styled from "styled-components";
import CatalogItem from "components/CatalogItem";
import { useSwipeable } from "react-swipeable";
import {useSpring,animated} from "react-spring"

function clamp(number:number, min:number, max:number) {
  return Math.max(min, Math.min(number, max));
}

const CarroussellWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const AnimatedCarroussellWrapper = animated(CarroussellWrapper);

const CarroussellContainer = styled.div`
  overflow: hidden;
`;

function timeUntilStop(initialSpeed:number,decaySpeed:number){
  return Math.abs(initialSpeed/decaySpeed)
}

function calculateNewPosition(initialSpeed:number,decaySpeed:number,initialPos:number){
  const time = timeUntilStop(initialSpeed,decaySpeed);
  const finalPos = initialPos + initialSpeed*time + (decaySpeed*(time**2)/2)
  return finalPos;
}

interface CatalogCarroussellProps {}
const DECAY_SPEED = 0.008;
const SPEED_CONSTANT_MULTIPLIER = 3;

const CatalogCarroussell: React.FunctionComponent<CatalogCarroussellProps> = (
  props
) => {
  const [pos, setPos] = useState<number>(0);
  const [initialPos, setInitialPos] = useState<number>(0);
  const [totalWidth,setTotalWidth] = useState<number>(0);
  const [immediate,setImmedate] = useState<boolean>(false);
  const ref =useRef<HTMLDivElement>();
  const springProps = useSpring({transform: `translate(${pos}px,0)`,immediate:immediate})

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      setImmedate(false);
      const newPos = clamp(calculateNewPosition(eventData.vxvy[0]*SPEED_CONSTANT_MULTIPLIER,DECAY_SPEED,pos),-1*totalWidth,0);
      console.log(newPos)
      setPos(newPos);
    
    },
    onSwiping: (eventData) => {
      setImmedate(true);
      const newPos = clamp(initialPos + eventData.deltaX,-1*totalWidth,0);
      setPos(newPos);
    },
    onSwipeStart: () => {
      setInitialPos(pos);
    },
    trackMouse: true,
    
  });

  const refPassthrough = (el:HTMLDivElement) => {
    // call useSwipeable ref prop with el
    handlers.ref(el);

    // set myRef el so you can access it yourself
    ref.current = el;
  }

  useLayoutEffect(() => {
    let width = 0;
    const items = ref.current?.children?.length || 0;
    for(let i = 0;i<items;i++){
      if(ref.current?.children[i]){
        width+=(ref.current?.children[i] as HTMLElement).offsetWidth
      }
    }
    setTotalWidth(width);
    console.log(width)
  },[])

  return (
    <CarroussellContainer>
      <AnimatedCarroussellWrapper style={{...springProps}} {...handlers} ref={refPassthrough}>
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
      </AnimatedCarroussellWrapper>
    </CarroussellContainer>
  );
};

export default CatalogCarroussell;
