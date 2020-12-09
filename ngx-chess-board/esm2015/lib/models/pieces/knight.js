import { Color } from './color';
import { Piece } from './piece';
import { Point } from './point';
export class Knight extends Piece {
    constructor(point, color, constant, board) {
        super(point, color, constant, 3, board);
        this.isMovedAlready = false;
    }
    getPossibleMoves() {
        const possiblePoints = [];
        const row = this.point.row;
        const col = this.point.col;
        // gora -> lewo
        if (this.board.isFieldEmpty(row - 2, col - 1)) {
            possiblePoints.push(new Point(row - 2, col - 1));
        }
        // gora -> prawo
        if (this.board.isFieldEmpty(row - 2, col + 1)) {
            possiblePoints.push(new Point(row - 2, col + 1));
        }
        // lewo -> gora
        if (this.board.isFieldEmpty(row - 1, col - 2)) {
            possiblePoints.push(new Point(row - 1, col - 2));
        }
        // prawo -> gora
        if (this.board.isFieldEmpty(row - 1, col + 2)) {
            possiblePoints.push(new Point(row - 1, col + 2));
        }
        // lewo -> dol
        if (this.board.isFieldEmpty(row + 1, col - 2)) {
            possiblePoints.push(new Point(row + 1, col - 2));
        }
        // prawo -> dol
        if (this.board.isFieldEmpty(row + 1, col + 2)) {
            possiblePoints.push(new Point(row + 1, col + 2));
        }
        // dol -> lewo
        if (this.board.isFieldEmpty(row + 2, col - 1)) {
            possiblePoints.push(new Point(row + 2, col - 1));
        }
        // dol -> prawo
        if (this.board.isFieldEmpty(row + 2, col + 1)) {
            possiblePoints.push(new Point(row + 2, col + 1));
        }
        return possiblePoints;
    }
    getPossibleCaptures() {
        const possiblePoints = [];
        const row = this.point.row;
        const col = this.point.col;
        // gora -> lewo
        if (this.board.isFieldTakenByEnemy(row - 2, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 2, col - 1));
        }
        // gora -> prawo
        if (this.board.isFieldTakenByEnemy(row - 2, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 2, col + 1));
        }
        // lewo -> gora
        if (this.board.isFieldTakenByEnemy(row - 1, col - 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col - 2));
        }
        // prawo -> gora
        if (this.board.isFieldTakenByEnemy(row - 1, col + 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col + 2));
        }
        // lewo -> dol
        if (this.board.isFieldTakenByEnemy(row + 1, col - 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col - 2));
        }
        // prawo -> dol
        if (this.board.isFieldTakenByEnemy(row + 1, col + 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col + 2));
        }
        // dol -> lewo
        if (this.board.isFieldTakenByEnemy(row + 2, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 2, col - 1));
        }
        // dol -> prawo
        if (this.board.isFieldTakenByEnemy(row + 2, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 2, col + 1));
        }
        return possiblePoints;
    }
    getCoveredFields() {
        const possiblePoints = [];
        const row = this.point.row;
        const col = this.point.col;
        // gora -> lewo
        possiblePoints.push(new Point(row - 2, col - 1));
        // gora -> prawo
        possiblePoints.push(new Point(row - 2, col + 1));
        // lewo -> gora
        possiblePoints.push(new Point(row - 1, col - 2));
        // prawo -> gora
        possiblePoints.push(new Point(row - 1, col + 2));
        // lewo -> dol
        possiblePoints.push(new Point(row + 1, col - 2));
        // prawo -> dol
        possiblePoints.push(new Point(row + 1, col + 2));
        // dol -> lewo
        possiblePoints.push(new Point(row + 2, col - 1));
        // dol -> prawo
        possiblePoints.push(new Point(row + 2, col + 1));
        return possiblePoints;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia25pZ2h0LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0tvbXB1dGVyL0Rlc2t0b3AvTm93eSBmb2xkZXIvY2hlc3MtYm9hcmQvcHJvamVjdHMvbmd4LWNoZXNzLWJvYXJkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvcGllY2VzL2tuaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVoQyxNQUFNLE9BQU8sTUFBTyxTQUFRLEtBQUs7SUFHN0IsWUFDSSxLQUFZLEVBQ1osS0FBWSxFQUNaLFFBQXVCLEVBQ3ZCLEtBQVk7UUFFWixLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBUjVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBU3ZCLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFFMUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFM0IsZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsZ0JBQWdCO1FBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsZ0JBQWdCO1FBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsY0FBYztRQUNkLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NB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LENBQUMsQ0FBQyxDQUFDO1FBRWpELGVBQWU7UUFDZixjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakQsY0FBYztRQUNkLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqRCxlQUFlO1FBQ2YsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpELE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpZWNlQ29uc3RhbnQgfSBmcm9tICcuLi8uLi91dGlscy91bmljb2RlLWNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vYm9hcmQnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vY29sb3InO1xyXG5pbXBvcnQgeyBQaWVjZSB9IGZyb20gJy4vcGllY2UnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtuaWdodCBleHRlbmRzIFBpZWNlIHtcclxuICAgIGlzTW92ZWRBbHJlYWR5ID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcG9pbnQ6IFBvaW50LFxyXG4gICAgICAgIGNvbG9yOiBDb2xvcixcclxuICAgICAgICBjb25zdGFudDogUGllY2VDb25zdGFudCxcclxuICAgICAgICBib2FyZDogQm9hcmRcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHBvaW50LCBjb2xvciwgY29uc3RhbnQsIDMsIGJvYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NzaWJsZU1vdmVzKCk6IFBvaW50W10ge1xyXG4gICAgICAgIGNvbnN0IHBvc3NpYmxlUG9pbnRzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMucG9pbnQucm93O1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMucG9pbnQuY29sO1xyXG5cclxuICAgICAgICAvLyBnb3JhIC0+IGxld29cclxuICAgICAgICBpZiAodGhpcy5ib2FyZC5pc0ZpZWxkRW1wdHkocm93IC0gMiwgY29sIC0gMSkpIHtcclxuICAgICAgICAgICAgcG9zc2libGVQb2ludHMucHVzaChuZXcgUG9pbnQocm93IC0gMiwgY29sIC0gMSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ29yYSAtPiBwcmF3b1xyXG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmlzRmllbGRFbXB0eShyb3cgLSAyLCBjb2wgKyAxKSkge1xyXG4gICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChyb3cgLSAyLCBjb2wgKyAxKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXdvIC0+IGdvcmFcclxuICAgICAgICBpZiAodGhpcy5ib2FyZC5pc0ZpZWxkRW1wdHkocm93IC0gMSwgY29sIC0gMikpIHtcclxuICAgICAgICAgICAgcG9zc2libGVQb2ludHMucHVzaChuZXcgUG9pbnQocm93IC0gMSwgY29sIC0gMikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcHJhd28gLT4gZ29yYVxyXG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmlzRmllbGRFbXB0eShyb3cgLSAxLCBjb2wgKyAyKSkge1xyXG4gICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChyb3cgLSAxLCBjb2wgKyAyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXdvIC0+IGRvbFxyXG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmlzRmllbGRFbXB0eShyb3cgKyAxLCBjb2wgLSAyKSkge1xyXG4gICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChyb3cgKyAxLCBjb2wgLSAyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwcmF3byAtPiBkb2xcclxuICAgICAgICBpZiAodGhpcy5ib2FyZC5pc0ZpZWxkRW1wdHkocm93ICsgMSwgY29sICsgMikpIHtcclxuICAgICAgICAgICAgcG9zc2libGVQb2ludHMucHVzaChuZXcgUG9pbnQocm93ICsgMSwgY29sICsgMikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZG9sIC0+IGxld29cclxuICAgICAgICBpZiAodGhpcy5ib2FyZC5pc0ZpZWxkRW1wdHkocm93ICsgMiwgY29sIC0gMSkpIHtcclxuICAgICAgICAgICAgcG9zc2libGVQb2ludHMucHVzaChuZXcgUG9pbnQocm93ICsgMiwgY29sIC0gMSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZG9sIC0+IHByYXdvXHJcbiAgICAgICAgaWYgKHRoaXMuYm9hcmQuaXNGaWVsZEVtcHR5KHJvdyArIDIsIGNvbCArIDEpKSB7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KHJvdyArIDIsIGNvbCArIDEpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwb3NzaWJsZVBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NzaWJsZUNhcHR1cmVzKCk6IFBvaW50W10ge1xyXG4gICAgICAgIGNvbnN0IHBvc3NpYmxlUG9pbnRzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMucG9pbnQucm93O1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMucG9pbnQuY29sO1xyXG5cclxuICAgICAgICAvLyBnb3JhIC0+IGxld29cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuaXNGaWVsZFRha2VuQnlFbmVteShcclxuICAgICAgICAgICAgICAgIHJvdyAtIDIsXHJcbiAgICAgICAgICAgICAgICBjb2wgLSAxLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9PT0gQ29sb3IuV0hJVEUgPyBDb2xvci5CTEFDSyA6IENvbG9yLldISVRFXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcG9zc2libGVQb2ludHMucHVzaChuZXcgUG9pbnQocm93IC0gMiwgY29sIC0gMSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ29yYSAtPiBwcmF3b1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5pc0ZpZWxkVGFrZW5CeUVuZW15KFxyXG4gICAgICAgICAgICAgICAgcm93IC0gMixcclxuICAgICAgICAgICAgICAgIGNvbCArIDEsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID09PSBDb2xvci5XSElURSA/IENvbG9yLkJMQUNLIDogQ29sb3IuV0hJVEVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChyb3cgLSAyLCBjb2wgKyAxKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXdvIC0+IGdvcmFcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuaXNGaWVsZFRha2VuQnlFbmVteShcclxuICAgICAgICAgICAgICAgIHJvdyAtIDEsXHJcbiAgICAgICAgICAgICAgICBjb2wgLSAyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9PT0gQ29sb3IuV0hJVEUgPyBDb2xvci5CTEFDSyA6IENvbG9yLldISVRFXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcG9zc2libGVQb2ludHMucHVzaChuZXcgUG9pbnQocm93IC0gMSwgY29sIC0gMikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcHJhd28gLT4gZ29yYVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5pc0ZpZWxkVGFrZW5CeUVuZW15KFxyXG4gICAgICAgICAgICAgICAgcm93IC0gMSxcclxuICAgICAgICAgICAgICAgIGNvbCArIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID09PSBDb2xvci5XSElURSA/IENvbG9yLkJMQUNLIDogQ29sb3IuV0hJVEVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChyb3cgLSAxLCBjb2wgKyAyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXdvIC0+IGRvbFxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5pc0ZpZWxkVGFrZW5CeUVuZW15KFxyXG4gICAgICAgICAgICAgICAgcm93ICsgMSxcclxuICAgICAgICAgICAgICAgIGNvbCAtIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID09PSBDb2xvci5XSElURSA/IENvbG9yLkJMQUNLIDogQ29sb3IuV0hJVEVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChyb3cgKyAxLCBjb2wgLSAyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwcmF3byAtPiBkb2xcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuaXNGaWVsZFRha2VuQnlFbmVteShcclxuICAgICAgICAgICAgICAgIHJvdyArIDEsXHJcbiAgICAgICAgICAgICAgICBjb2wgKyAyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9PT0gQ29sb3IuV0hJVEUgPyBDb2xvci5CTEFDSyA6IENvbG9yLldISVRFXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcG9zc2libGVQb2ludHMucHVzaChuZXcgUG9pbnQocm93ICsgMSwgY29sICsgMikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZG9sIC0+IGxld29cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuaXNGaWVsZFRha2VuQnlFbmVteShcclxuICAgICAgICAgICAgICAgIHJvdyArIDIsXHJcbiAgICAgICAgICAgICAgICBjb2wgLSAxLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9PT0gQ29sb3IuV0hJVEUgPyBDb2xvci5CTEFDSyA6IENvbG9yLldISVRFXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcG9zc2libGVQb2ludHMucHVzaChuZXcgUG9pbnQocm93ICsgMiwgY29sIC0gMSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZG9sIC0+IHByYXdvXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmlzRmllbGRUYWtlbkJ5RW5lbXkoXHJcbiAgICAgICAgICAgICAgICByb3cgKyAyLFxyXG4gICAgICAgICAgICAgICAgY29sICsgMSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPT09IENvbG9yLldISVRFID8gQ29sb3IuQkxBQ0sgOiBDb2xvci5XSElURVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KHJvdyArIDIsIGNvbCArIDEpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwb3NzaWJsZVBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3ZlcmVkRmllbGRzKCk6IFBvaW50W10ge1xyXG4gICAgICAgIGNvbnN0IHBvc3NpYmxlUG9pbnRzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMucG9pbnQucm93O1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMucG9pbnQuY29sO1xyXG5cclxuICAgICAgICAvLyBnb3JhIC0+IGxld29cclxuICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChyb3cgLSAyLCBjb2wgLSAxKSk7XHJcblxyXG4gICAgICAgIC8vIGdvcmEgLT4gcHJhd29cclxuICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChyb3cgLSAyLCBjb2wgKyAxKSk7XHJcblxyXG4gICAgICAgIC8vIGxld28gLT4gZ29yYVxyXG4gICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KHJvdyAtIDEsIGNvbCAtIDIpKTtcclxuXHJcbiAgICAgICAgLy8gcHJhd28gLT4gZ29yYVxyXG4gICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KHJvdyAtIDEsIGNvbCArIDIpKTtcclxuXHJcbiAgICAgICAgLy8gbGV3byAtPiBkb2xcclxuICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChyb3cgKyAxLCBjb2wgLSAyKSk7XHJcblxyXG4gICAgICAgIC8vIHByYXdvIC0+IGRvbFxyXG4gICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KHJvdyArIDEsIGNvbCArIDIpKTtcclxuXHJcbiAgICAgICAgLy8gZG9sIC0+IGxld29cclxuICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChyb3cgKyAyLCBjb2wgLSAxKSk7XHJcblxyXG4gICAgICAgIC8vIGRvbCAtPiBwcmF3b1xyXG4gICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KHJvdyArIDIsIGNvbCArIDEpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlUG9pbnRzO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==