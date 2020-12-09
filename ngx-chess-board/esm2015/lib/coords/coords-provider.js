export class CoordsProvider {
    constructor() {
        this.defaultXCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.reversedXCoords = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
        this.defaultYCoords = [8, 7, 6, 5, 4, 3, 2, 1];
        this.reversedYCoords = [1, 2, 3, 4, 5, 6, 7, 8];
        this.currentXCoords = this.defaultXCoords;
        this.currentYCoords = this.defaultYCoords;
    }
    get xCoords() {
        return this.currentXCoords;
    }
    get yCoords() {
        return this.currentYCoords;
    }
    reverse() {
        this.currentXCoords = this.reversedXCoords;
        this.currentYCoords = this.reversedYCoords;
    }
    reset() {
        this.init();
    }
    init() {
        this.currentXCoords = this.defaultXCoords;
        this.currentYCoords = this.defaultYCoords;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRzLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0tvbXB1dGVyL0Rlc2t0b3AvTm93eSBmb2xkZXIvY2hlc3MtYm9hcmQvcHJvamVjdHMvbmd4LWNoZXNzLWJvYXJkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb29yZHMvY29vcmRzLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ1ksbUJBQWMsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRSxvQkFBZSxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXJFLG1CQUFjLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsb0JBQWUsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyRCxtQkFBYyxHQUFhLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0MsbUJBQWMsR0FBYSxJQUFJLENBQUMsY0FBYyxDQUFDO0lBdUIzRCxDQUFDO0lBckJHLElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sSUFBSTtRQUNSLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDOUMsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvb3Jkc1Byb3ZpZGVyIHtcclxuICAgIHByaXZhdGUgZGVmYXVsdFhDb29yZHM6IHN0cmluZ1tdID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnXTtcclxuICAgIHByaXZhdGUgcmV2ZXJzZWRYQ29vcmRzOiBzdHJpbmdbXSA9IFsnaCcsICdnJywgJ2YnLCAnZScsICdkJywgJ2MnLCAnYicsICdhJ107XHJcblxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0WUNvb3JkczogbnVtYmVyW10gPSBbOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XHJcbiAgICBwcml2YXRlIHJldmVyc2VkWUNvb3JkczogbnVtYmVyW10gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF07XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50WENvb3Jkczogc3RyaW5nW10gPSB0aGlzLmRlZmF1bHRYQ29vcmRzO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50WUNvb3JkczogbnVtYmVyW10gPSB0aGlzLmRlZmF1bHRZQ29vcmRzO1xyXG5cclxuICAgIGdldCB4Q29vcmRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WENvb3JkcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgeUNvb3JkcygpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFlDb29yZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRYQ29vcmRzID0gdGhpcy5yZXZlcnNlZFhDb29yZHM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WUNvb3JkcyA9IHRoaXMucmV2ZXJzZWRZQ29vcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRYQ29vcmRzID0gdGhpcy5kZWZhdWx0WENvb3JkcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRZQ29vcmRzID0gdGhpcy5kZWZhdWx0WUNvb3JkcztcclxuICAgIH1cclxufVxyXG4iXX0=