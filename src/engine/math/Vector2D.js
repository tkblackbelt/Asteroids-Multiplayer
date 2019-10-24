export default class Vector2D {

    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    negative() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };

    add(v) {
        if (v instanceof Vector2D) {
            this.x += v.x;
            this.y += v.y;
        } else {
            this.x += v;
            this.y += v;
        }
        return this;
    };

    subtract(v) {
        if (v instanceof Vector2D) {
            this.x -= v.x;
            this.y -= v.y;
        } else {
            this.x -= v;
            this.y -= v;
        }
        return this;
    };

    multiply(v) {
        if (v instanceof Vector2D) {
            this.x *= v.x;
            this.y *= v.y;
        } else {
            this.x *= v;
            this.y *= v;
        }
        return this;
    };

    divide(v) {
        if (v instanceof Vector2D) {
            if (v.x !== 0) this.x /= v.x;
            if (v.y !== 0) this.y /= v.y;
        } else {
            if (v !== 0) {
                this.x /= v;
                this.y /= v;
            }
        }
        return this;
    };

    equals(v) {
        return this.x === v.x && this.y === v.y;
    };

    dot(v) {
        return this.x * v.x + this.y * v.y;
    };

    cross(v) {
        return this.x * v.y - this.y * v.x
    };

    length() {
        return Math.sqrt(this.dot(this));
    };

    normalize() {
        return this.divide(this.length());
    };

    min() {
        return Math.min(this.x, this.y);
    };

    max() {
        return Math.max(this.x, this.y);
    };

    toAngles() {
        return -Math.atan2(-this.y, this.x);
    };

    angleTo(a) {
        return Math.acos(this.dot(a) / (this.length() * a.length()));
    };

    toArray(n) {
        return [this.x, this.y].slice(0, n || 2);
    };

    setAngle(angle) {
        const length = this.length();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    };

    setLength(length) {
        const angle = this.toAngles();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    };

    clone() {
        return new Vector2D(this.x, this.y);
    };

    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    isZero() {
        return this.x === 0 && this.y === 0;
    }

    static zeroVector2D() {
        return new Vector2D(0, 0)
    }
}
