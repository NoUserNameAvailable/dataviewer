package model.output;

public class ColumnVariable {

    private String name;
    private Integer count;
    private Float averageAge;

    public ColumnVariable(String name, Integer count, Float averageAge) {
        this.name = name;
        this.count = count;
        this.averageAge = averageAge;
    }

    public String getName() {
        return name;
    }

    public ColumnVariable setName(String name) {
        this.name = name;
        return this;
    }

    public Integer getCount() {
        return count;
    }

    public ColumnVariable setCount(Integer count) {
        this.count = count;
        return this;
    }

    public Float getAverageAge() {
        return averageAge;
    }

    public ColumnVariable setAverageAge(Float averageAge) {
        this.averageAge = averageAge;
        return this;
    }
}
