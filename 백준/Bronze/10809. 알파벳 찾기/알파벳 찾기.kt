fun main() {
    val S = readln()
    val result = mutableMapOf<Char, Int>()

    for (i in 'a'..'z') {
        result[i] = -1
    }

    for (s in S) {
        result[s] = S.indexOf(s)
    }

    println(result.values.joinToString(" "))
}